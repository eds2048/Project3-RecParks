import React, { Component } from 'react';
import style from "./index.css";
import parksData from '../../data/Parks.json';
import { addReview as reviewAPI, addReview } from '../../utils/API';

class Main extends Component {

  firstPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  secondPark = parksData[Math.floor(Math.random() * Math.floor(1982))]
  thirdPark = parksData[Math.floor(Math.random() * Math.floor(1982))]

  constructor(props) {
    super(props);

    this.state = {
      threeParksData: []
    };
  }

async componentDidMount() {
  await reviewAPI.lastThreeParks()
    .then(result => {
      this.setState({ threeParksData: JSON.stringify(result[0]) });
    });
}

render(){
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
            <td> {this.state.threeParksData}</td>
            <td> {this.firstPark.park_location} </td>
            <td> {this.firstPark.park_borough} </td>
            <a href={this.firstPark.website}> <td> {this.firstPark.website} </td></a>
          </tr>
          <tr>
            <td> {this.secondPark.park_name} </td>
            <td> {this.secondPark.park_location}</td>
            <td> {this.secondPark.park_borough} </td>
            <a href={this.secondPark.website}> <td> {this.secondPark.website} </td></a>
          </tr><tr>
            <td> {this.thirdPark.park_name} </td>
            <td> {this.thirdPark.park_location} </td>
            <td> {this.thirdPark.park_borough} </td>
            <a href={this.thirdPark.website}> <td> {this.thirdPark.website} </td></a>
          </tr>
        </tbody>
      </table>
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
            <td> {this.firstPark.park_name} </td>
            <td> {this.firstPark.park_location} </td>
            <td> {this.firstPark.park_borough} </td>
            <a href={this.firstPark.website}> <td> {this.firstPark.website} </td></a>
          </tr>
          <tr>
            <td> {this.secondPark.park_name} </td>
            <td> {this.secondPark.park_location}</td>
            <td> {this.secondPark.park_borough} </td>
            <a href={this.secondPark.website}> <td> {this.secondPark.website} </td></a>
          </tr><tr>
            <td> {this.thirdPark.park_name} </td>
            <td> {this.thirdPark.park_location} </td>
            <td> {this.thirdPark.park_borough} </td>
            <a href={this.thirdPark.website}> <td> {this.thirdPark.website} </td></a>
          </tr>
        </tbody>
      </table>
      </div>



      </div>
    </div>



  );
}
}

export default Main;
