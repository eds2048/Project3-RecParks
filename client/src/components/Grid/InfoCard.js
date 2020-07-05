import React from "react";
import "./style.css";

function infoCard () {
    return (
        <div className="card">
            <div className="card-header">
                <p className="card-title">Additional Details</p>      
            </div>
            <div className="card-body">
                <p className="card-text"> Address: </p>
                <p className="card-text"> Rating: </p>
                <button className="mapButton"> Map </button>
            </div>
        </div>

    );
}

export default infoCard;