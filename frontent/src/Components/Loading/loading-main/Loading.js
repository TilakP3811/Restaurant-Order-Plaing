import React from 'react'
import "../loading-style/loading.css";
import loadingScreen from "../loading-public/reload.png";

const Loading = () => {
    return (
        <div class="loading">
            <img class="loading-img" src={loadingScreen} alt=""/>
        </div>
    )
}
export default Loading;