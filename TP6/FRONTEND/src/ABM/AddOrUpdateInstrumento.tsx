import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInstrumento, saveInstrumento, updateInstrumento } from "../utils/APIUtils";
export interface instrumento {
  instrumento: string | null;
  marca: string | null;
  modelo: string | null;
  imagen: string | null;
  precio: string | null;
  costoEnvio: string | null;
  cantidadVendida: string | null;
  descripcion: string | null;
}
export const baseInstrumento = {
  instrumento: null,
  marca: null,
  modelo: null,
  imagen: null,
  precio: null,
  costoEnvio: null,
  cantidadVendida: null,
  descripcion: null,
};
export const InstrumentoAddOrUpdate = () => {
  const { RequestedEndpoint, productId } = useParams();
  const [instrumento, setInstrumento] = useState<instrumento>(baseInstrumento);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (productId) {
      updateInstrumento(instrumento,productId)
    } else {
      saveInstrumento(instrumento);
    }

    navigate(`/abm`);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInstrumento({
      ...instrumento,
      [e.target.name]: e.target.value,
    });
  }

  const setPropsOfExistentUnidadDeMedida = async () => {
    try {
      const data = await getInstrumento({Id:productId, setter:setInstrumento});
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    productId !== undefined && setPropsOfExistentUnidadDeMedida();
  }, []);
  return (
    <div className="relative bg-white py-6 sm:py-8 lg:py-12 lg:pb-60 ">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Carga de Registro
          </h2>

          <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
            Completa el formulario para ingresar un nuevo instrumento
            <span className="text-amber-600">{RequestedEndpoint}</span>
          </p>
        </div>

        <form
          className={`max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:gap-10  `}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="instrumento" className="lg:text-2xl">
            Nombre
          </label>
          <input
            name={"instrumento"}
            id={"instrumento"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.instrumento || ""}
            required
          />
          <label htmlFor="marca" className="lg:text-2xl">
            Marca
          </label>
          <input
            name={"marca"}
            id={"marca"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.marca || ""}
            required
          />
          <label htmlFor="modelo" className="lg:text-2xl">
            modelo
          </label>
          <input
            name={"modelo"}
            id={"modelo"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.modelo || ""}
            required
          />
          <label htmlFor="descripcion" className="lg:text-2xl">
            descripcion
          </label>
          <input
            name={"descripcion"}
            id={"descripcion"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.descripcion || ""}
            required
          />
          <label htmlFor="costoEnvio" className="lg:text-2xl">
            costoEnvio
          </label>
          <input
            name={"costoEnvio"}
            id={"costoEnvio"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.costoEnvio || ""}
            required
          />
          <label htmlFor="precio" className="lg:text-2xl">
            precio
          </label>
          <input
            name={"precio"}
            id={"precio"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.precio || ""}
            required
          />
          <label htmlFor="cantidadVendida" className="lg:text-2xl">
            cantidadVendida
          </label>
          <input
            name={"cantidadVendida"}
            id={"cantidadVendida"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.cantidadVendida || ""}
            required
          />
         
          <label htmlFor="imagen" className="lg:text-2xl">
            URL Imagen
          </label>
          <input
            name={"imagen"}
            id={"imagen"}
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            onChange={(e) => handleChange(e)}
            value={instrumento.imagen || ""} pattern="https?://.+"
            required
          />
          <button
            type="submit"
            className="col-start-2 inline-block h-full rounded bg-black px-6 py-2 text-xs font-medium uppercase leading-normal text-white shadow-black transition
                     duration-150 ease-in-out hover:bg-gray-700 hover:shadow-gray-700 focus:bg-gray-800 focus:shadow-gray-800 focus:outline-none focus:ring-0 active:bg-gray-800
                     active:shadow-gray-800 dark:bg-white dark:text-black dark:shadow-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300 dark:focus:bg-gray-100 dark:focus:shadow-gray-100
                     dark:active:bg-gray-100 dark:active:shadow-gray-100"
          >
            <h5 className="lg:text-lg">Agregar</h5>
          </button>
        </form>
      </div>
    </div>
  );
};
