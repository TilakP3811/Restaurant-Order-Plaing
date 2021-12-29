import React from 'react'
import "../dessert-style/dessert.css";
import Horizontal from "../../../../HorizontalBar/horizontal-main/Horizontal";
import DessertController from '../dessert-controller/DessertController';
import Navbar from '../../../../../Navbar/main/Navbar';

const Dessert = () => {
    return (
        <>
            <Navbar />
            <Horizontal />
            <DessertController/>
        </>
    )
}
export default Dessert;