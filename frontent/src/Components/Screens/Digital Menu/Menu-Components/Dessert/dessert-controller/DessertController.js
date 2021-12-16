import React, { useState, useEffect } from 'react';
import Loading from '../../../../../Loading/loading-main/Loading';
import Dropper from '../../../../DropDowner/Dropper';

const DessertController = () => {
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
                    <div style={{ marginTop: "10px" }}>
                        {
                            dishes.map(items => {
                                if (items.catagory === "Dessert" && items.dishType === "Dessert") {
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
export default DessertController;