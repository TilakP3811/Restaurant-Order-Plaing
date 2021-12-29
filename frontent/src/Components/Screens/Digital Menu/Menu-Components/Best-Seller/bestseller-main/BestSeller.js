import React from 'react'
import "../bestseller-style/bestseller.css";
import Horizontal from '../../../../HorizontalBar/horizontal-main/Horizontal';
import BestSellerController from '../bestseller-controller/BestSellerController';
import Navbar from '../../../../../Navbar/main/Navbar';

const BestSeller = () => {
    return (
        <>
            <Navbar />
            <Horizontal />
            <BestSellerController />
        </>
    )
}
export default BestSeller;