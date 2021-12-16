import React from 'react'
import "../beverage-style/beverage.css";
import Horizontal from "../../../../HorizontalBar/horizontal-main/Horizontal";
import BeverageController from "../beverage-controller/BeverageController";

const Beverage = () => {
    return (
        <>
            <Horizontal />
            <BeverageController />
        </>
    )
}
export default Beverage;