import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import { userContext } from "../../../../Context/context";
import { REMOVE_TO_CART, INCREMENT, DECREMENT, CANCEL } from '../../../../Actions/Actions';

const CartController = () => {
    const { cart, cartDispatch } = useContext(userContext);
    const { toggleDispatch } = useContext(userContext);
    let grandTotal = 0;
    const { number } = useParams();
    const navigate = useNavigate();
    useEffect(() => {

    }, [cart])

    const removeToCart = (id, name, prize, quantity) => {
        cartDispatch({ type: REMOVE_TO_CART, payload: { id: id, name: name, prize: prize, quantity: quantity } });
        toggleDispatch({ type: REMOVE_TO_CART, payload: { id: id } })
    }

    const increment = (id) => {
        cartDispatch({ type: INCREMENT, payload: { id: id } });
    }

    const decrement = (id) => {
        cartDispatch({ type: DECREMENT, payload: { id: id } });
    }

    const placeOrder = async () => {
        try {
            const res = await fetch("/place-order", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tableNum: number,
                    orderList: cart
                })
            });

            const data = await res.json();
            if (data.message) {
                alert(data.message);
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    const cancelOrder = () => {
        cartDispatch({ type: CANCEL });
        toggleDispatch({type: CANCEL});
        navigate("/");
    }

    return (
        <>
            <div className="main">
                <div className="cart-head">
                    <div className="items">
                        <p className="name h">Name</p>
                        <p className="quantity-name h">Quantity</p>
                        <p className="price h">Price/plt</p>
                        <p className="total total-n h">Total</p>
                    </div>
                </div>
                <div className="carts">
                    {
                        cart.map(item => {
                            return (
                                <div key={item.id} className="items">
                                    <p className="name">{item.name}</p>
                                    {
                                        item.quantity <= 1 ? <i className="decrement fas fa-minus"></i> : <i onClick={() => { decrement(item.id) }} className="decrement fas fa-minus"></i>
                                    }
                                    <p className="quantity">{item.quantity}</p>
                                    <i onClick={() => { increment(item.id) }} className="increment fas fa-plus"></i>
                                    <p className="price">{item.prize}/-</p>
                                    <p className="total">₹{item.quantity * item.prize}</p>
                                    <i onClick={() => removeToCart(item.id, item.name, item.prize, 1)} className="cross far fa-times-circle"></i>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="cart-total">
                    {
                        cart.map(item => {
                            grandTotal = grandTotal + item.quantity * item.prize;
                            return null;
                        })
                    }
                    <div className="items">
                        <p className="name h total-h">Grand Total : </p>
                        <p className="total total-n h">₹{grandTotal}</p>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={() => cancelOrder()} className="btn btn-outline-danger btn-cancel">Cancel</button>
                    <button onClick={() => placeOrder()} className="btn btn-outline-success btn-order">Place Order</button>
                </div>
            </div>

        </>
    )
}
export default CartController;