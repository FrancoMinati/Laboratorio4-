import { Link } from "react-router-dom";
import ProductListItem from "./ProductListItem";

import { Product } from "../types";
import styles from "./Product.module.css";
import { useState, useEffect } from "react";
import { getInstrumentos, saveInstrumentos } from "../utils/APIUtils";
const ProductList = () => {
  const [instrumentos, setInstrumentos] = useState([]);

  
  useEffect(() => {
    getInstrumentos({ setter: setInstrumentos });
  }, [instrumentos]);
  return (
    <div className={styles.divList}>
      {instrumentos.length === 0 && (
        <button
          className={styles.btnCarga}
          onClick={() => {
            saveInstrumentos();
          }}
        >
          Carga
        </button>
      )}
      {instrumentos.map((product: Product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductListItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
