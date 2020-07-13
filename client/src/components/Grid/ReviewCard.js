import React from "react";
import "./style.css";

function ReviewCard() {
    return (
        <div className="card">
            <div className="card-body">
                    <p>Leave Your Own Review!</p>
                    <form>
                        <div className="form-row">
                            <div className="col">
                            <input className="review" placeholder="Username"></input>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                            <div className="col">
                            <input className="review" placeholder="This is my favorite park because ..."></input>
                            </div>
                        </div>
                        <br />
                        <div className="form-row">
                        <button className="btn btn-success btn-sm submitButton"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}
export default ReviewCard;