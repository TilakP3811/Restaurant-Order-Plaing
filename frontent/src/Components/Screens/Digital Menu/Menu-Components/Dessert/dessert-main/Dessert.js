import React from 'react'
import "../dessert-style/dessert.css";
import Horizontal from "../../../../HorizontalBar/horizontal-main/Horizontal";
import DessertController from '../dessert-controller/DessertController';

const Dessert = () => {
    return (
        <>
            <Horizontal />
            <DessertController/>
        </>
    )
}
export default Dessert;