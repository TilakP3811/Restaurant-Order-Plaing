import React, { useReducer } from "react";
import Navbar from "./Components/Navbar/main/Navbar";
import Routing from "./Components/Navbar/routes/Routing";
import { BrowserRouter } from 'react-router-dom';
import { userContext } from "./Context/context";
import { cartReducer, cartToggle, tableNumber } from "./Reducers/Reducers";
import "./App.css";

const App = () => {
    const [cart, cartDispatch] = useReducer(cartReducer, []);
    const [toggle, toggleDispatch] = useReducer(cartToggle, []);
    const [table, tableDispatch] = useReducer(tableNumber, { table:"1" });
    return (
        <userContext.Provider value={{cart, cartDispatch, toggle, toggleDispatch, table, tableDispatch}}>
            <BrowserRouter>
                <Navbar />
                <Routing />
            </BrowserRouter>
        </userContext.Provider>
    )
}

export default App;