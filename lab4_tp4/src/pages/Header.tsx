import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <nav className={styles.navContent}>
       <Link to="/"><h1 className={styles.storeName}>musical hendrix</h1></Link>
      <div className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/donde_estamos">Donde estamos</Link>
        <Link to="/productos">Productos</Link>
      </div>
    </nav>
  );
};

export default Header;
