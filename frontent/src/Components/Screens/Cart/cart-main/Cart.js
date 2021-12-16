import React from 'react';
import "../cart-style/cart.css";
import CartController from '../cart-controller/CartController';
import Horizontal from "../../HorizontalBar/horizontal-main/Horizontal";

const Cart = () => {
    return (
        <>
            <Horizontal />
            <CartController />
        </>
    )
}
export default Cart;