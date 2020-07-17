import React, { Component } from 'react';
import style from "./index.css";
import parksData from '../../data/Parks.json';
import { addReview as reviewAPI } from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';
import { Button } from '../../components/Button';

class ParkReviews extends Component {

  constructor(props) {
    super(props);

    this.state = {
      parkIDOne:[],
      parkNameOne: [],
      overallRatingOne: [],
      overallRatingTwo: [],
      overallRatingThree: [],
      overallRatingFour: [],
      overallRatingFive: [],
      accessibilityRatingOne: [],
      accessibilityRatingTwo: [],
      accessibilityRatingThree: [],
      accessibilityRatingFour: [],
      accessibilityRatingFive: [],
      cleanlinessRatingOne: [],
      cleanlinessRatingTwo: [],
      cleanlinessRatingThree: [],
      cleanlinessRatingFour: [],
      cleanlinessRatingFive: [],
      activitiesRatingOne: [],
      activitiesRatingTwo: [],
      activitiesRatingThree: [],
      activitiesRatingFour: [],
      activitiesRatingFive: [],
      reviewTextOne: [],
      reviewTextTwo: [],
      reviewTextThree: [],
      reviewTextFour: [],
      reviewTextFive: []
    };
  }

	handleInputChange = event => {
    const { name, value } = event.target;
		this.setState({
			[name]: value
    });
  }  

  parkSelection = event => {
  reviewAPI.pullParkReviews(this.state.park_id)
   .then((result)=> {
    this.setState({  parkIDOne: result.data[0].park_id});
    this.setState({  parkNameOne: parksData[(result.data[0].park_id)-1].park_name});
    if (result.data[0] != null) {
          this.setState({
          overallRatingOne: result.data[0].overall_rating,
          accessibilityRatingOne: result.data[0].accessibility_rating,
          cleanlinessRatingOne: result.data[0].cleanliness_rating,
          activitiesRatingOne: result.data[0].activities_rating,
          reviewTextOne: result.data[0].review_text,  
          createdAtOne: result.data[0].createdAt})}
    if (result.data[1] != null) {
          this.setState({ 
          overallRatingTwo: result.data[1].overall_rating,
          accessibilityRatingTwo: result.data[1].accessibility_rating,
          cleanlinessRatingTwo: result.data[1].cleanliness_rating,
          activitiesRatingTwo: result.data[1].activities_rating,
          reviewTextTwo: result.data[1].review_text,
          createdAtTwo: result.data[1].createdAt})}
    if (result.data[2] != null) {
          this.setState({
          overallRatingThree: result.data[2].overall_rating,
          accessibilityRatingThree: result.data[2].accessibility_rating,
          cleanlinessRatingThree: result.data[2].cleanliness_rating,
          activitiesRatingThree: result.data[2].activities_rating,
          reviewTextThree: result.data[2].review_text,
          createdAtThree: result.data[2].createdAt})}
    if (result.data[3] != null) {
          this.setState({
          overallRatingFour: result.data[3].overall_rating,
          accessibilityRatingFour: result.data[3].accessibility_rating,
          cleanlinessRatingFour: result.data[3].cleanliness_rating,
          activitiesRatingFour: result.data[3].activities_rating,
          reviewTextFour: result.data[3].review_text,
          createdAtFive: result.data[3].createdAt})}
    if (result.data[4] != null) {
          this.setState({
          overallRatingFive: result.data[4].overall_rating,
          accessibilityRatingFive: result.data[4].accessibility_rating,
          cleanlinessRatingFive: result.data[4].cleanliness_rating,
          activitiesRatingFive: result.data[4].activities_rating,
          reviewTextFive: result.data[4].review_text,
          createdAtFour: result.data[4].createdAt   
        })}
      })
       .catch(err => {console.log(err)})
    }

render(){
  return (
    <div className="jumbotron">
      
      <div className="jumbotron text-center">
      <h1>View Park Reviews!</h1>
    </div>
      <div className="row">
      <div className="card">
        <div>
        </div>
      </div>

      <label htmlFor="park">Park Name:</label>
      <Input
          value={this.state.park_id}
          onChange={this.handleInputChange}
          name="park_id"
          list="parks"
          type="text"
          className="form-control"
          placeholder="Type in park name to begin"
          id="park"
        />
        <datalist id="parks">
          {parksData.map(parksData => (
          <option hidden selected value = {parksData.park_id}>{JSON.stringify(parksData.park_name).replace(/['"]+/g, '')}</option>)
          )}
        </datalist>

        { (this.state.park_id !== '') 
				?  <a> <Button theme='primary' onClick={() => this.parkSelection([this.state.park_id])}>View Reviews</Button> </a>
        : <a></a>
        }


      <h1>{this.state.parkNameOne}</h1>
    
      <div className="select" style={{display: "inline"}}>
      <table className="table">
        <thead>
          <tr style={{fontWeight: "bold"}}>
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
            <td> {this.state.overallRatingOne} </td>
            <td> {this.state.accessibilityRatingOne} </td>
            <td> {this.state.cleanlinessRatingOne} </td>
            <td> {this.state.activitiesRatingOne} </td>
            <td> {this.state.reviewTextOne} </td>
            <td> {this.state.createdAtOne} </td>
          </tr>
          <tr>
            <td> {this.state.overallRatingTwo} </td>
            <td> {this.state.accessibilityRatingTwo} </td>
            <td> {this.state.cleanlinessRatingTwo} </td>
            <td> {this.state.activitiesRatingTwo} </td>
            <td> {this.state.reviewTextTwo} </td> 
            <td> {this.state.createdAtTwo} </td>
            </tr>
            <tr>
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
  </div>
</div>

  );
}
}

export default ParkReviews;
