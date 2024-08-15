import React from 'react';
import './styles/index.css'
import styles from './styles/App.module.css'; 
import { Link } from 'react-router-dom';

const App = () => {
    return (
      <div className={styles.container}>
        <div className={styles.centerImage}>
          Find Your Treasure
          <div className={styles.menuButtons}>
            <Link to="shop"><button>SHOP NOW</button></Link>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={`${styles.boxes} ${styles.colorOne}`}><p>Get discounts when recommending someone</p></div>
          <div className={`${styles.boxes} ${styles.colorTwo}`}><p>Join our rewards program</p></div>
          <div className={`${styles.boxes} ${styles.colorTwo}`}><p>First time vistors use code "treasure" for discount</p></div>
          <div className={`${styles.boxes} ${styles.colorOne}`}><p>Great Deals Everyday</p></div>
        </div>
      </div>
    );
  };
  
  export default App;