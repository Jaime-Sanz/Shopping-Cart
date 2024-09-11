import logo from '../assets/images/icon-shoppingcart.png';
import styles from '../styles/Cart.module.css';
import { useState } from 'react';

const Cart = (cart) => {

    const [cartVisibility, setCartVisibility] = useState(false);

    return (
        <div>
            <div className={styles.cartContainer}></div>
            <button className={styles.cartButton}><img src={logo} alt="Your Cart" /> Cart</button>
        </div>
    );
};

export default Cart;//