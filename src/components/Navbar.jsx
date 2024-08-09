import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/images/logo.png';
import Cart from './Cart';

const Navbar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={logo} alt="Picture of Logo"/>
                <h1>rendy Treasures</h1>
            </div>
            <div className={styles.subContainer}>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                </li>
                <Cart />
            </div>
        </div>
    );
};

export default Navbar;