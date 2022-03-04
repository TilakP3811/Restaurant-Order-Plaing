import React, { useContext } from 'react'
import { userContext } from '../../../Context/context';
import { ADD_TO_CART, REMOVE_TO_CART } from '../../../Actions/Actions';

const Dropper = ({ id, name, prize, tag }) => {
    const { cartDispatch } = useContext(userContext);
    const { toggle, toggleDispatch } = useContext(userContext);
    const isAdmin = localStorage.getItem("token");

    const addToCart = (id, name, prize, quantity) => {
        cartDispatch({ type: ADD_TO_CART, payload: { id: id, name: name, prize: prize, quantity: quantity } });
        toggleDispatch({ type: ADD_TO_CART, payload: { id: id } });
    }

    const removeToCart = (id, name, prize, quantity) => {
        cartDispatch({ type: REMOVE_TO_CART, payload: { id: id, name: name, prize: prize, quantity: quantity } });
        toggleDispatch({ type: REMOVE_TO_CART, payload: { id: id } })
    }

    return (
        <div key={id} className="sub-slider-outer">
            <div className="sub-slider">
                <p className="item-name">{name}</p>
                <span className="item-prize">₹ {prize}</span>
                {
                    isAdmin ? <i className="cart-icon far fa-edit"></i> : toggle.includes(id) ? <i onClick={() => { removeToCart(id, name, prize, 1) }} className="cart-icon fas fa-minus-circle"></i> : <i onClick={() => { addToCart(id, name, prize, 1) }} className="cart-icon fas fa-cart-plus"></i>
                }
            </div>
            <div className="item-tag">
                <span className={tag + " tag-name"}>{tag}</span>
            </div>
        </div>
    )
}
export default Dropper;