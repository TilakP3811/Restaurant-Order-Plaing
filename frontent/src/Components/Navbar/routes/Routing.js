import React from "react";
import { Route, Routes } from "react-router-dom";
import Food from "../../Screens/Digital Menu/Menu-Components/Food/food-main/Food";
import Home from "../../Screens/Home/home-main/Home";
import Beverage from "../../Screens/Digital Menu/Menu-Components/Beverage/beverage-main/Beverage";
import Dessert from "../../Screens/Digital Menu/Menu-Components/Dessert/dessert-main/Dessert";
import BestSeller from "../../Screens/Digital Menu/Menu-Components/Best-Seller/bestseller-main/BestSeller";
import Cart from "../../Screens/Cart/cart-main/Cart";
import Signin from "../../Admin/Signin/signin-main/Signin";
import OrdersMain from "../../Admin/Orders/orders-main/OrdersMain";

const Routing = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/:number" element={<Home/>}/>
            <Route exact path="/:number/digital-menu/best-sellers" element={<BestSeller/>}/>
            <Route path="/:number/digital-menu/food" element={<Food/>}/>
            <Route path="/:number/digital-menu/beverage" element={<Beverage/>}/>
            <Route path="/:number/digital-menu/dessert" element={<Dessert/>}/>
            <Route path="/:number/cart" element={<Cart/>}/>
            <Route path="/admin-login" element={<Signin/>}/>
            <Route exact path="/admin" element={<Home/>}/>
            <Route path="/admin/digital-menu/best-sellers" element={<BestSeller/>}/>
            <Route path="/admin/digital-menu/food" element={<Food/>}/>
            <Route path="/admin/digital-menu/beverage" element={<Beverage/>}/>
            <Route path="/admin/digital-menu/dessert" element={<Dessert/>}/>
            <Route path="/admin/orders" element={<OrdersMain/>}/>
        </Routes>
    )
}

export default Routing;