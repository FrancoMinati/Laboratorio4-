import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data.json";
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

export const getInstrumento = async ({ Id, setter }) => {
  await axios.get("http://localhost:8080/instrumentos/" + Id).then((res) => {
    setter(res.data);
  });
};
export const getInstrumentos = ({ setter }) => {
  axios
    .get(`http://localhost:8080/instrumentos`)
    .then((res) => setter(res.data))
    .catch(() =>
      axios.post("http://localhost:8080/instrumentos/save-list", {
        productsData,
      })
    );
};
