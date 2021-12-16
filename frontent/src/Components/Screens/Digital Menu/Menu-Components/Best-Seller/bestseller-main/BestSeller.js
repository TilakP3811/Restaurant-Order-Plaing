import React from 'react'
import "../bestseller-style/bestseller.css";
import Horizontal from '../../../../HorizontalBar/horizontal-main/Horizontal';
import BestSellerController from '../bestseller-controller/BestSellerController';

const BestSeller = () => {
    return (
        <>
            <Horizontal />
            <BestSellerController />
        </>
    )
}
export default BestSeller;