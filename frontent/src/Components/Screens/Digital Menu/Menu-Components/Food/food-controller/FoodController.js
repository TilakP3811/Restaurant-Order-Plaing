import React, { useState, useEffect } from 'react';
import Dropper from '../../../../DropDowner/Dropper';
import openCart from './foodOpenCart';
import closeCart from './foodCloseCart';
import catagories from "../../Catagories-Details/catagories";
import Loading from '../../../../../Loading/loading-main/Loading';

const FoodController = () => {
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDishes();
    }, [])

    const getDishes = async () => {
        try {
            const res = await fetch("/get-dishes");
            const data = await res.json();
            if (data) {
                setDishes(data.dishes);
                setLoading(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {
                loading ?
                    catagories.map((types) => {
                        if (types.catagory === "Food") {
                            return (
                                <div key={types.id} className="single-catagory">
                                    <div className="catagary-items">
                                        <div className="dropdown">
                                            <img src={types.img} alt="" className="dropdown-img" />
                                            <p onClick={() => { openCart(types.id) }} className="dropdown-head">{types.name}</p>
                                            <i style={{ display: 'block', width: "20px", marginRight: "10px", marginTop: "22px", color: "rgb(175, 169, 169)", transition: "0.3s", cursor: "pointer" }} onClick={() => { openCart(types.id) }} className={"down-arrow" + types.id + " arrow fas fa-angle-down"}></i>
                                            <i style={{ width: "20px", display: "none", marginRight: "10px", marginTop: "22px", color: "rgb(175, 169, 169)", transition: "0.3s", cursor: "pointer" }} onClick={() => { closeCart(types.id) }} className={"up-arrow" + types.id + " arrow fas fa-angle-up"}></i>
                                        </div>
                                    </div>
                                    <div style={{ margin: "0 auto", padding: "20px", width: "auto", display: "none", transition: "0.5s" }} className={"slider slider" + types.id}>
                                        {
                                            dishes.map(items => {
                                                if (items.catagory === "Food" && items.dishType === types.name) {
                                                    return (
                                                        <Dropper key={items._id} id={items._id} name={items.name} prize={items.prize} tag={items.dishTag} />
                                                    )
                                                }
                                                return null;
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                :
                    <Loading />
            }
        </>
    )
}
export default FoodController;