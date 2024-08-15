import styles from "../styles/Shopping.module.css";
import electronic from "../assets/images/icon-electronic.png";
import jewelery from "../assets/images/icon-jewelery.png";
import man from "../assets/images/icon-man.png";
import women from "../assets/images/icon-women.png";
import rating from "../assets/images/icon-rating.png";
import shoppingCart from "../assets/images/icon-shoppingcart.png";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);

  const addItemCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + quantity
        };
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const handleAddToCart = (product) => {
    const quantity = parseInt(document.querySelector(`#quantity-${product.id}`).value, 10) || 1;
    addItemCart(product, quantity);
  };

  const toggleCartState = () => {
    setToggleCart((prevState) => !prevState);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network Error: Products Failed To Load');
      }
      return response.json();
    })
    .then((products) => {
      setProducts(products);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if(loading) {
    return <div className={styles.loadingContainer}>
              <div className={styles.loader}></div>
            </div>;
  }

  if(error) {
    return <div className={styles.errorMessage}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.toggleCart} style={{ visibility: toggleCart ? 'visible' : 'hidden' }}>
          <div>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                {item.title} - Quantity: {item.quantity} - ${item.price * item.quantity}
              </div>
            ))}
          </div>
          <div className={styles.cartTotal}>
            <p>Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <div className={styles.toggleCartButtonContainer}>
            <button className={styles.toggleCartButton} onClick={toggleCartState}>Close Cart</button>
            <button className={styles.toggleCartButton}>Check Out</button>
          </div>
        </div>
        <h1 className={styles.headers}>Categories</h1>
        <li className={styles.categories}>
          <button onClick={() => handleCategoryChange('electronics')}><img src={electronic} alt="logo for electronics" />Electronics</button>
          <button onClick={() => handleCategoryChange('jewelery')}><img src={jewelery} alt="logo for jewelery" />Jewelery</button>
          <button onClick={() => handleCategoryChange("men's clothing")}><img src={man} alt="logo for men" />Men</button>
          <button onClick={() => handleCategoryChange("women's clothing")}><img src={women} alt="logo for women" />Women</button>
        </li>
        <button className={styles.resetButton} onClick={() => handleCategoryChange('all')}>Reset Filter</button>
        <button className={styles.cartButton} onClick={toggleCartState}><img src={shoppingCart} alt="Your Cart" /> Cart</button>
      </div>
      <div className={styles.shoppingContainer}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <h4>{product.title}</h4>
            <img src={product.image} alt="picture of product" className={styles.productImg}/>
            <div className={styles.rating}>
              <p>Rating: {product.rating.rate} <img src={rating} alt="picture of stars"/></p>
            </div>
            <p className={styles.price}>{"$" + product.price}</p>
            <div className={styles.priceButtonContainer}>
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
              <input type="number" min="1" max="100" placeholder="1" id={`quantity-${product.id}`}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Shopping.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Shopping;
