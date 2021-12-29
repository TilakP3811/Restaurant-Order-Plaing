import React from 'react';
import "../cart-style/cart.css";
import CartController from '../cart-controller/CartController';
import Horizontal from "../../HorizontalBar/horizontal-main/Horizontal";
import Navbar from '../../../Navbar/main/Navbar';

const Cart = () => {
    return (
        <>
            <Navbar />
            <Horizontal />
            <CartController />
        </>
    )
}
export default Cart;