import React from 'react';
import Navbar from '../../../Navbar/main/Navbar';
import OrdersController from '../orders-controller/OrdersController';
import "../orders-style/orders-style.css";

const OrdersMain = () => {
    return (
        <div>
            <Navbar />
            <OrdersController />
        </div>
    )
}
export default OrdersMain;