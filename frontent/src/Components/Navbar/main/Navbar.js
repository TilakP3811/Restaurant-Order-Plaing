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
    useEffect(() => {
    }, [cart])

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    }

    const readLinks = () => {
        if(isAdmin){
            return [
                <li key={1} className="nav-items"><Link to={ "/admin" } className="nav-link-head">Home</Link></li>,
                <li key={2} className="nav-items"><Link to={ "/admin/digital-menu/best-sellers" } className="nav-link-head">Digital Menu</Link></li>,
                <li key={3} className="nav-items"><Link to={ "/admin/digital-menu/best-sellers" } className="nav-link-sub">Best Sellers</Link></li>,
                <li key={4} className="nav-items"><Link to={ "/admin/digital-menu/food" } className="nav-link-sub">Food</Link></li>,
                <li key={5} className="nav-items"><Link to={ "/admin/digital-menu/dessert" } className="nav-link-sub">Dessert</Link></li>,
                <li key={6} className="nav-items"><Link to={ "/admin/digital-menu/beverage" } className="nav-link-sub">Beverage</Link></li>,
                <li key={7} className="nav-items"><Link to={ "/admin/orders" } className="nav-link-head">Orders</Link></li>,
                <li key={8} className="nav-items"><Link to={ "/admin/orders-history" } className="nav-link-head">Orders History</Link></li>
            ]
        }
        else{
            return [
                <li key={1} className="nav-items"><Link to={ "/"+table.table} className="nav-link-head">Home</Link></li>,
                <li key={2} className="nav-items"><Link to={ "/"+table.table+"/digital-menu/best-sellers"} className="nav-link-head">Digital Menu</Link></li>,
                <li key={3} className="nav-items"><Link to={ "/"+table.table+"/digital-menu/best-sellers"} className="nav-link-sub">Best Sellers</Link></li>,
                <li key={4} className="nav-items"><Link to={ "/"+table.table+"/digital-menu/food"} className="nav-link-sub">Food</Link></li>,
                <li key={5} className="nav-items"><Link to={ "/"+table.table+"/digital-menu/beverage"} className="nav-link-sub">Beverage</Link></li>,
                <li key={6} className="nav-items"><Link to={ "/"+table.table+"/digital-menu/dessert"} className="nav-link-sub">Dessert</Link></li>,
            ]
        }
    };

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
                        isAdmin ? <i onClick={logOut} className="icons fas fa-sign-out-alt"></i> : <Link className='link' to={"/"+table.table+"/cart"}><i className="icons fas fa-cart-arrow-down"></i></Link>
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
                        {readLinks()}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;