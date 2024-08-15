import styles from "../styles/Shopping.module.css";
import electronic from "../assets/images/icon-electronic.png";
import jewelery from "../assets/images/icon-jewelery.png";
import man from "../assets/images/icon-man.png";
import women from "../assets/images/icon-women.png";
import rating from "../assets/images/icon-rating.png";
import Cart from "../components/Cart";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Shopping = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartState, setCartState] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const addItemCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if(!response.ok) {
        throw new Error('Network Error: Products Failed To Load')
      }
      return response.json()
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
  }

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  if(loading) {
    return <div className={styles.loadingContainer}>
              <div className={styles.loader}></div>
            </div>
  }

  if(error) {
    return <div className={styles.errorMessage}>{error}</div>
  }

    return (
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <h1 className={styles.headers}>Categories</h1>
          <li className={styles.categories}>
            <button onClick={() => handleCategoryChange('electronics')}><img src={electronic} alt="logo for electronics" />Electronics</button>
            <button onClick={() => handleCategoryChange('jewelery')}><img src={jewelery} alt="logo for jewelery" />Jewelery</button>
            <button onClick={() => handleCategoryChange("men's clothing")}><img src={man} alt="logo for men" />Men</button>
            <button onClick={() => handleCategoryChange("women's clothing")}><img src={women} alt="logo for women" />Women</button>
          </li>
          <button className={styles.resetButton} onClick={() => handleCategoryChange('all')}>Reset Filter</button>
          <div className={styles.cartContainer}>
            <Cart  cartInformation={cart} onClick={cartState}/>
            <div className={styles.cartBox}></div>
          </div>
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
                    <button onClick={() => addItemCart(product)}>Add To Cart</button>
                    <input type="number" min="1" max="100" placeholder="1"/>
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