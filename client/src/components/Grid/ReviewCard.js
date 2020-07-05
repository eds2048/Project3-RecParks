import React from "react";
import "./style.css";

function ReviewCard() {
    return (
        <div className="card">
            <div className="card-header">
                <p className="card-title">Leave A Review!</p>      
            </div>
            <div className="card-body">
                <p className="card-text">
                    <input className="review"></input>
                    <button className="submitButton"> Submit </button>
                </p>
            </div>
        </div>

    );
}
export default ReviewCard;