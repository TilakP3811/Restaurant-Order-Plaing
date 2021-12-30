import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "../home-style/home.css";
import banner from "../home-public/home-banner.jpeg";
import bestSeller from "../home-public/img1.jpg";
import food from "../home-public/img2.jpg";
import beverage from "../home-public/img3.jpeg";
import dessert from "../home-public/img4.jpeg";
import { userContext } from '../../../../Context/context';

const HomeControler = () => {
    const {table} = useContext(userContext);
    const isAdmin = localStorage.getItem("token");
    return (
        <div>
            <div className="banner-div">
                <img className="home-banner" src={banner} alt=""/>
            </div>
            <div className="menu-container">
                <div className="head">
                    <h1>MENU</h1>
                </div>
                <div className="menu">
                    <Link className="links" to={ isAdmin ? "/admin/digital-menu/best-sellers" : "/"+table.table+"/digital-menu/best-sellers"}><div>
                        <img className="menu-img" src={bestSeller} alt=""/>
                            <p>Best Sellers</p>
                    </div></Link>
                    <Link className="links" to={ isAdmin ? "/admin/digital-menu/food" : "/"+table.table+"/digital-menu/food"}><div>
                        <img className="menu-img" src={food} alt=""/>
                            <p>Food</p>
                    </div></Link>
                    <Link className="links" to={ isAdmin ? "/admin/digital-menu/beverage" : "/"+table.table+"/digital-menu/beverage"}><div>
                        <img className="menu-img" src={beverage} alt=""/>
                            <p>Beverage</p>
                    </div></Link>
                    <Link className="links" to={ isAdmin ? "/admin/digital-menu/dessert" : "/"+table.table+"/digital-menu/dessert"}><div>
                        <img className="menu-img" src={dessert} alt=""/>
                            <p>Desserts</p>
                    </div></Link>
                </div>
            </div>
        </div>
    )
}
export default HomeControler;