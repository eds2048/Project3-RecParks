import React from "react";
import "./style.css";

function infoCard () {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text"> Address: </p>
                <p className="card-text"> Rating: </p>
                <p className="card-text"> Reviews: </p>
                <ul style={{listStyleType: "none", fontStyle: "italic"}}>
                    <li> "This is my favorite park!" - parkgirl123 </li>
                    <li> "Great for social distancing" - iloveny </li>
                    <li> "10/10 would recommend" - soccer426 </li>
                </ul>
            </div>
        </div>

    );
}

export default infoCard;