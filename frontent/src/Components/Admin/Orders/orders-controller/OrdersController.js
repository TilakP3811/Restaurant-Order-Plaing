import React, { useState, useEffect } from 'react';
import Loading from "../../../Loading/loading-main/Loading";

const OrdersController = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const orderTotal = orders.length;
    let total = 0;
    useEffect(() => {
        getOrders();
    }, []);
    
    useEffect(() => {
        getOrders();
    }, [orders]);

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
        } catch (err) {
            console.log(err);
        }
    }

    const deleveredOrder = async (id) => {
        try {
            setLoading(true);
            const res = await fetch("/delete-orders", {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    id: id
                })
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const cancelOrder = async (id) => {
        try {
            setLoading(true);
            const res = await fetch("/delete-orders", {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    id: id
                })
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="header">
                <h2 className="header-txt">ORDERS</h2>
            </div>
            {
                loading ? <Loading/> :
                orderTotal===0 ? <div style={{textAlign: 'center'}} className="cart-orderSomthing"><h1>No Orders Yet..</h1></div> :
                <>
                    {
                        orders.map(order => {
                            {total=0}
                            return (
                                <div key={order._id} className="container">
                                    <p className="table">Table {order.tableNum}</p>
                                    <div className="date-time">
                                        <p className="time">Time : {order.time}</p>
                                        <p className="date">Date : {order.date}</p>
                                    </div>
                                    <div className="orders-heading">
                                        <p className="dish">Dish</p>
                                        <p className="quantitye">Quantity</p>
                                        <p className="price">Net Price</p>
                                    </div>
                                    {
                                        order.orderList.map(item => {
                                            return(
                                                <div key={item.id} className="orders-lists">
                                                    <p className="dish-n">{item.name}</p>
                                                    <p className="quantity-n">{item.quantity}</p>
                                                    <p className="price-n">₹{item.prize*item.quantity}/-</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="totals">
                                        {
                                            order.orderList.map(item => {
                                                total = total+item.prize*item.quantity; 
                                                return null;
                                            })
                                        }
                                        <p className="total-prize">
                                            ₹{total}/-
                                        </p>
                                    </div>
                                    <div className="deliver">
                                        <p onClick={()=>cancelOrder(order._id)} className="cancel">Canceled</p>
                                        <p onClick={()=>deleveredOrder(order._id)} className="delivered">Delivered</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
                
            }
        </div >
    )
}
export default  OrdersController;