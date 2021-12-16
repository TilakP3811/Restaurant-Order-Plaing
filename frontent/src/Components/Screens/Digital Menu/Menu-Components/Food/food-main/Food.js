import React from 'react';
import FoodController from '../food-controller/FoodController';
import Horizontal from '../../../../HorizontalBar/horizontal-main/Horizontal';
import "../food-style/food.css";

const Food = () => {
    return (
        <>
            <Horizontal />
            <FoodController />
        </>
    )
}

export default Food;
