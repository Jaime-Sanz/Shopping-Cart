import logo from '../assets/images/icon-shoppingcart.png';
import styles from '../styles/Cart.module.css';

const Cart = (cart) => {

    return (
        <div>
            <button className={styles.cartButton}><img src={logo} alt="Your Cart" /> Cart</button>
        </div>
    );
};

export default Cart;