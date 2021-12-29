import React from 'react';
import FoodController from '../food-controller/FoodController';
import Horizontal from '../../../../HorizontalBar/horizontal-main/Horizontal';
import "../food-style/food.css";
import Navbar from '../../../../../Navbar/main/Navbar';

const Food = () => {
    return (
        <>
            <Navbar />
            <Horizontal />
            <FoodController />
        </>
    )
}

export default Food;
