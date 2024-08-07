import logo from '/public/assets/images/shoppingcart.png';
import styles from '../styles/Cart.module.css';

const Cart = () => {
    return (
        <div>
            <button className={styles.cartButton}><img src={logo} alt="Your Cart" /></button>
        </div>
    );
};

export default Cart;