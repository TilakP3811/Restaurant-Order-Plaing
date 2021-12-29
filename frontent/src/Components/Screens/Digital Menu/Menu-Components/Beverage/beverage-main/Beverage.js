import React from 'react'
import "../beverage-style/beverage.css";
import Horizontal from "../../../../HorizontalBar/horizontal-main/Horizontal";
import BeverageController from "../beverage-controller/BeverageController";
import Navbar from '../../../../../Navbar/main/Navbar';

const Beverage = () => {
    return (
        <>
            <Navbar />
            <Horizontal />
            <BeverageController />
        </>
    )
}
export default Beverage;