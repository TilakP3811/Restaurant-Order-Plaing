import React from 'react'
import "../loading-style/loading.css";
import loadingScreen from "../loading-public/reload.png";

const Loading = () => {
    return (
        <div className="loading">
            <img className="loading-img" src={loadingScreen} alt=""/>
        </div>
    )
}
export default Loading;