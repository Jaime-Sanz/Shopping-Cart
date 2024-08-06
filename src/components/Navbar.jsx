import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src="./assets/images/logo.png" alt="Picture of Logo"/>
                <h1>Trendy Treasures</h1>
            </div>
            <div className={styles.subContainer}>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                </li>
                <button>Cart</button>
            </div>
        </div>
    );
};

export default Navbar;