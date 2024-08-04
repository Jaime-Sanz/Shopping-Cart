import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return ( 
        <div className={styles.container}>
            <h1>PlaceHolder Title</h1>
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