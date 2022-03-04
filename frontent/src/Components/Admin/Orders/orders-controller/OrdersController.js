import React, { useState, useEffect } from 'react';
import Loading from "../../../Loading/loading-main/Loading";

const OrdersController = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        try {
            const res = await fetch("/get-orders", {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            const data = await res.json();

            if(data.err === false){
                setOrders(data.orders);
                setLoading(false);
            }
            console.log(orders);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            
        </>
    )
}
export default  OrdersController;