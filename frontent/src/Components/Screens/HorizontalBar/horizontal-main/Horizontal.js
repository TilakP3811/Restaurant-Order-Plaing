import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import "../horizontal-style/horizontal.css";
import img1 from "../horizontal-public/img1.jpg";
import img2 from "../horizontal-public/img2.jpg";
import img3 from "../horizontal-public/img3.jpeg";
import img4 from "../horizontal-public/img4.jpeg";
import banner from "../horizontal-public/banner.jpeg";
import { userContext } from '../../../../Context/context';

const Horizontal = () => {
    const {table} = useContext(userContext);
    return (
        <>
            <div className="horizontal-slider">
                <div className="story-container">
                    <ul>
                        <Link style={{ textDecoration: "none" }} to={"/"+table.table+"/digital-menu/best-sellers"}>
                            <li className="has-story">
                                <div className="story">
                                    <img src={img1} alt="" />
                                </div>
                                <span className="user">Best Sellers</span>
                            </li>
                        </Link>

                        <Link style={{ textDecoration: "none" }} to={"/"+table.table+"/digital-menu/food"}>
                            <li className="has-story">
                                <div className="story">
                                    <img src={img2} alt="" />
                                </div>
                                <span className="user">Food</span>
                            </li>
                        </Link>

                    <Link style={{ textDecoration: "none" }} to={"/"+table.table+"/digital-menu/beverage"}>
                            <li className="has-story">
                                <div className="story">
                                    <img src={img3} alt="" />
                                </div>
                                <span className="user">Beverage</span>
                            </li>
                        </Link>

                        <Link style={{ textDecoration: "none" }} to={"/"+table.table+"/digital-menu/dessert"}>
                            <li className="has-story">
                                <div className="story">
                                    <img src={img4} alt="" />
                                </div>
                                <span className="user">Dessert</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className="banner">
                <img className='banner-img' src={banner} alt='' />
            </div>
        </>
    )
}

export default Horizontal;
