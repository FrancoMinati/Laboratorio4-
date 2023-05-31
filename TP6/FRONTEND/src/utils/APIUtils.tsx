import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data.json";
import { instrumento } from "../ABM/AddOrUpdateInstrumento";
export const fetchImage = ({ product, setImagen }) => {
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/instrumentos/obtener-imagen/${product.imagen}`,
        {
          responseType: "arraybuffer",
        }
      )
      .then((response) => {
        const imageBase64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
        setImagen(imageUrl);
      })
      .catch((error) => console.error(error));
  }, [product.imagen]);
};
export const fetchImages = async (instrumentos) => {
  const images = [];
  for (let i = 0; i < instrumentos.length; i++) {
    const instrumento = instrumentos[i];

    if (instrumento.imagen.includes("http")) {
      continue;
    }
    const response = await axios
      .get(
        `http://localhost:8080/instrumentos/obtener-imagen/${instrumento.imagen}`,
        {
          responseType: "arraybuffer",
        }
      )
      .then((response) => {
        const imageBase64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const imageUrl = `data:image/jpeg;base64,${imageBase64}`;
        images.push(imageUrl);
      })
      .catch((error) => console.error(error));
  }
  return images;
};

export const getInstrumento = async ({
  Id,
  setter,
}: {
  Id: string;
  setter: React.Dispatch<React.SetStateAction<instrumento>>;
}) => {
  await axios.get("http://localhost:8080/instrumentos/" + Id).then((res) => {
    setter(res.data);
  });
};
export const getInstrumentos = async ({ setter }) => {
  const response = await axios.get(`http://localhost:8080/instrumentos`);
  setter(response.data);
  return response;
};

export const saveInstrumentos = async () => {
  const response = await axios.post(
    `http://localhost:8080/instrumentos/save-list`,
    productsData
  );
  return response.data;
};

export const saveInstrumento = async (instrumento: instrumento) => {
  const response = await axios.post(
    `http://localhost:8080/instrumentos/save`,
    instrumento
  );
  return response.data;
};
export const updateInstrumento = async (
  instrumento: instrumento,
  id: string | undefined
) => {
  const response = await axios.put(
    `http://localhost:8080/instrumentos/save/${id}`,
    instrumento
  );
  return response.data;
};

export const deleteInstrumento = async (id: string | undefined) => {
  const response = await axios.delete(
    `http://localhost:8080/instrumentos/${id}`
  );
  return response.data;
};
