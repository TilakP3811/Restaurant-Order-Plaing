import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import closeSlider from '../controller/closeSlider';
import openSlider from '../controller/openSlider';
import resturantLogo from "../public/resturant_logo.jpg";
import { userContext } from "../../../Context/context";

const Navbar = () => {
    const { cart, table } = useContext(userContext);
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem("token");
    console.log(isAdmin);
    useEffect(() => {
    }, [cart])

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <>
            <div className="navbar">
                <div className="nav-brand">
                    <i onClick={() => { openSlider(); }} className="icons fas fa-bars "></i>
                    <p style={{ cursor: "pointer" }}><Link className="brand" to={ isAdmin ? "/admin" : table ? "/"+table.table : "/1"}>Monroe by Mars</Link></p>
                </div>
                <div className="search-cart">
                    <i className="icons fas fa-search "></i>
                    {
                        isAdmin ? <i onClick={logOut} class="icons fas fa-sign-out-alt"></i> : <Link className='link' to={"/"+table.table+"/cart"}><i className="icons fas fa-cart-arrow-down"></i></Link>
                    }
                    {
                        isAdmin ? "" : <h6 className='num-of-items'>{cart.length}</h6>
                    }
                </div>
            </div>
            <div className="slidebar">
                <div className="brand-details">
                    <img className="logo" src={resturantLogo} alt="" />
                    <p style={{ cursor: "pointer" }} className="brand-name"><Link to={ isAdmin ? "/admin" : table ? "/"+table.table : "/1"} className="nav-link-head">Monroe by Mars</Link></p>
                    <i onClick={() => { closeSlider(); }} className="close fas fa-times"></i>
                </div>
                <div >
                    <ul>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin" : "/"+table.table} className="nav-link-head">Home</Link></li>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin/digital-menu/best-sellers" : "/"+table.table+"/digital-menu/best-sellers"} className="nav-link-head">Digital Menu</Link></li>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin/digital-menu/best-sellers" : "/"+table.table+"/digital-menu/best-sellers"} className="nav-link-sub">Best Sellers</Link></li>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin/digital-menu/food" : "/"+table.table+"/digital-menu/food"} className="nav-link-sub">Food</Link></li>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin/digital-menu/beverage" : "/"+table.table+"/digital-menu/beverage"} className="nav-link-sub">Beverage</Link></li>
                        <li className="nav-items"><Link to={ isAdmin ? "/admin/digital-menu/dessert" : "/"+table.table+"/digital-menu/dessert"} className="nav-link-sub">Dessert</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;