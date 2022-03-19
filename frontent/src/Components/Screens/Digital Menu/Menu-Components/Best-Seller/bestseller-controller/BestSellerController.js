import React, { useState, useEffect } from 'react'
import Dropper from '../../../../DropDowner/Dropper';
import Loading from '../../../../../Loading/loading-main/Loading';

const BestSellerController = () => {
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
            console.log(dishes);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {
                loading ?
                    <div style={{ marginTop: "10px" }}>
                        {
                            dishes.map(items => {
                                if (items.bestSeller === "Best Seller") {
                                    return (
                                        <Dropper key={items._id} id={items._id} name={items.name} prize={items.prize} tag={items.dishTag} />
                                    )
                                }
                                return null;
                            })
                        }
                    </div>
                :
                    <Loading />
            }
        </>
    )
}
export default BestSellerController;