import React from "react";
import style from "./index.css";
import parksData from '../../data/Parks.json';

function Main() {

  const firstPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  const secondPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  const thirdPark = parksData[Math.floor(Math.random() * Math.floor(1982))]

  return (
    <div className="jumbotron">
      <div className="row">
      <div className="card">
        <div>
        </div>
      </div>

      <div className="jumbotron text-center">
      <h1>Three cool NYC parks!</h1>
    </div>
      
      <div className="select" style={{display: "inline"}}> 
      <table className="table">
        <thead>
          <tr style={{fontWeight: "bold"}}> 
            <td> Park Name </td>
            <td> Address </td>
            <td> Borough </td>
            <td> Website </td>
          </tr>
        </thead>
        <tbody style={{textAlign: "center"}}>
          <tr>
            <td> {firstPark.park_name} </td>
            <td> {firstPark.park_location} </td>
            <td> {firstPark.park_borough} </td>
            <a href={firstPark.website}> <td> {firstPark.website} </td></a>
          </tr>
          <tr>
            <td> {secondPark.park_name} </td>
            <td> {secondPark.park_location}</td>
            <td> {secondPark.park_borough} </td>
            <a href={secondPark.website}> <td> {secondPark.website} </td></a>
          </tr><tr>
            <td> {thirdPark.park_name} </td>
            <td> {thirdPark.park_location} </td>
            <td> {thirdPark.park_borough} </td>
            <a href={thirdPark.website}> <td> {thirdPark.website} </td></a>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>

  );
}

export default Main;
