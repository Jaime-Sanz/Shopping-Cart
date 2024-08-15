import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/images/logo.png';
import home from '../assets/images/icon-home.png';
import Cart from './Cart';

const Navbar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={logo} alt="Picture of Logo"/>
                <h1>rendy Treasures</h1>
            </div>
            <div className={styles.subContainer}>
                <Link to="/"> Home </Link>
            </div>
        </div>
    );
};

export default Navbar;