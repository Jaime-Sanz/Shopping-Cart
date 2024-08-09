import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from 'prop-types';

 const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
 };

 Layout.propTypes = {
    children: PropTypes.node.isRequired,
 }

 export default Layout;