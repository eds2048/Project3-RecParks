import React from "react";
import "./style.css";
import Map from "./map_placeholder.png"

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="row">
      <div className="card">
        <div>
        {/* <img src={Map} alt="map_placeholder" style={{position: "fixed", height: "50%"}}/> */}
        </div>
      </div>
      
      <div className="select" style={{display: "inline"}}> 
      <table className="table">
        <thead>
          <tr style={{fontWeight: "bold"}}> 
            <td> Park Name </td>
            <td> Address </td>
            <td> Distance From Me </td>
          </tr>
        </thead>
        <tbody style={{textAlign: "center"}}>
          <tr>
            <td> Park One </td>
            <td> Address </td>
            <td> XX Miles </td>
          </tr>
          <tr>
            <td> Park Two </td>
            <td> Address </td>
            <td> XX Miles </td>
          </tr><tr>
            <td> Park Three </td>
            <td> Address </td>
            <td> XX Miles </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default Jumbotron;
