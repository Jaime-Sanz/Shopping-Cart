import styles from "../styles/Shopping.module.css";
import electronic from "../assets/images/icon-electronic.png";
import jewelery from "../assets/images/icon-jewelery.png";
import man from "../assets/images/icon-man.png";
import women from "../assets/images/icon-women.png";

const Shopping = () => {
    return (
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <h1 className={styles.headers}>Categories</h1>
          <li className={styles.categories}>
            <button><img src={electronic} alt="logo for electronics" />Electronics</button>
            <button><img src={jewelery} alt="logo for jewelery" />Jewelery</button>
            <button><img src={man} alt="logo for men" />Men</button>
            <button><img src={women} alt="logo for women" />Women</button>
          </li>
          <button className={styles.resetButton}>Reset Filter</button>
        </div>
        <div className={styles.shoppingContainer}>
          
        </div>
      </div>
    );
  };
  
  export default Shopping;