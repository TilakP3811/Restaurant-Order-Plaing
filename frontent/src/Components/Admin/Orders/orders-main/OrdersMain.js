import React from 'react';
import "../orders-style/orders.css";
import Navbar from '../../../Navbar/main/Navbar';
import OrdersController from '../orders-controller/OrdersController';

const OrdersMain = () => {
    return (
        <div>
            <Navbar />
            <OrdersController />
        </div>
    )
}
export default OrdersMain;