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
      parkNameOne: [],
      parkNameTwo: [],
      parkNameThree: [],
      overallRatingOne: [],
      overallRatingTwo: [],
      overallRatingThree: [],
      accessibilityRatingOne: [],
      accessibilityRatingTwo: [],
      accessibilityRatingThree: [],
      cleanlinessRatingOne: [],
      cleanlinessRatingTwo: [],
      cleanlinessRatingThree: [],
      activitiesRatingOne: [],
      activitiesRatingTwo: [],
      activitiesRatingThree: [],
      reviewtextOne: [],
      reviewtextTwo: [],
      reviewtextThree: []
    };
  }

componentDidMount() {
  let threeParksData = this;

  reviewAPI.lastThreeParks()
   .then((result)=> {
        this.setState({ 
          parkIDOne: result.data[0].park_id,
          parkIDTwo: result.data[1].park_id,
          parkIDThree: result.data[2].park_id,
          overallRatingOne: result.data[0].overall_rating,
          overallRatingTwo: result.data[1].overall_rating,
          overallRatingThree: result.data[2].overall_rating,
          accessibilityRatingOne: result.data[0].accessibility_rating,
          accessibilityRatingTwo: result.data[1].accessibility_rating,
          accessibilityRatingThree: result.data[2].accessibility_rating,
          cleanlinessRatingOne: result.data[0].cleanliness_rating,
          cleanlinessRatingTwo: result.data[1].cleanliness_rating,
          cleanlinessRatingThree: result.data[2].cleanliness_rating,
          activitiesRatingOne: result.data[0].activities_rating,
          activitiesRatingTwo: result.data[1].activities_rating,
          activitiesRatingThree: result.data[2].activities_rating,
          reviewTextOne: result.data[0].review_text,
          reviewTextTwo: result.data[1].review_text,
          reviewTextThree: result.data[2].review_text,
          createdAtOne: result.data[0].createdAt,
          createdAtTwo: result.data[1].createdAt,
          createdAtThree: result.data[2].createdAt,
          parkNameOne: parksData[(result.data[0].park_id)-1].park_name,
          parkNameTwo: parksData[(result.data[1].park_id)-1].park_name,
          parkNameThree: parksData[(result.data[2].park_id)-1].park_name
        })
      })
       .catch(err => {console.log(err)});
};



render(){
  return (
    <div className="jumbotron">
      <div className="row">
      <div className="card">
        <div>
        </div>
      </div>

      <div className="jumbotron text-center">
      <h1>Three most recent park reviews!</h1>
    </div>

      <div className="select" style={{display: "inline"}}>
      <table className="table">
        <thead>
          <tr style={{fontWeight: "bold"}}>
            <td> Park Name </td>
            <td> Overall Rating </td>
            <td> Accessibility Rating </td>
            <td> Cleanliness Rating </td>
            <td> Activities Rating </td>
            <td> Park Review </td>
            <td> Review Submission Time </td>
          </tr>
        </thead>
        <tbody style={{textAlign: "center"}}>
          <tr>
            <td> {this.state.parkNameOne}</td>
            <td> {this.state.overallRatingOne} </td>
            <td> {this.state.accessibilityRatingOne} </td>
            <td> {this.state.cleanlinessRatingOne} </td>
            <td> {this.state.activitiesRatingOne} </td>
            <td> {this.state.reviewTextOne} </td>
            <td> {this.state.createdAtOne} </td>
          </tr>
          <tr>
            <td> {this.state.parkNameTwo}</td>
            <td> {this.state.overallRatingTwo} </td>
            <td> {this.state.accessibilityRatingTwo} </td>
            <td> {this.state.cleanlinessRatingTwo} </td>
            <td> {this.state.activitiesRatingTwo} </td>
            <td> {this.state.reviewTextTwo} </td> 
            <td> {this.state.createdAtTwo} </td>
            </tr>
            <tr>
            <td> {this.state.parkNameThree}</td>
            <td> {this.state.overallRatingThree} </td>
            <td> {this.state.accessibilityRatingThree} </td>
            <td> {this.state.cleanlinessRatingThree} </td>
            <td> {this.state.activitiesRatingThree} </td>
            <td> {this.state.reviewTextThree} </td>
            <td> {this.state.createdAtThree} </td>
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
