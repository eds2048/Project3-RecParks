import React, { Component } from 'react';
import style from "./index.css";
import parksData from '../../data/Parks.json';
import { addReview as reviewAPI } from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';
import { Button } from '../../components/Button';
import { Container, Row, Col } from 'react-bootstrap';
import key from '../Main/review_key.png';

class ParkReviews extends Component {

  constructor(props) {
    super(props);
//State variables
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

//Show the last five reviews for the selected park
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
    <Container>
    <div>
      <Row>
      <h1 className='header'>View Park Reviews!</h1>
      </Row>

      <Row className="jumbotron">
      <Row>
        <Col xs={12} sm={12}>
      <label htmlFor="park">Park Name:</label>
      <Input
          value={this.state.park_id}
          onChange={this.handleInputChange}
          name="park_id"
          list="parks"
          type="text"
          className="form-control review-input"
          placeholder="Type in park name to begin"
          id="park"
        />
        <datalist id="parks">
          {parksData.map(parksData => (
          <option hidden selected value = {parksData.park_id}>{JSON.stringify(parksData.park_name).replace(/['"]+/g, '')}</option>)
          )}
        </datalist>
{/* If a park ID is selected, then allow an onClick to pull reviews */}
        { (this.state.park_id !== '') 
				?  <a> <Button theme='primary' onClick={() => this.parkSelection([this.state.park_id])}>View Reviews</Button> </a>
        : <a></a>
        }
        </Col>
        </Row>
        <Row style={{overflow: 'scroll'}}>
        <h1 style={{textAlign: 'center'}}>{this.state.parkNameOne}</h1>
          <Col xs={4} md={4} style={{justifyContent: 'space-around'}}>
          <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingOne}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingOne}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingOne}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingOne}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextOne} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtOne} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
            <Col xs={4} md={4}  style={{justifyContent: 'space-around'}}>
            <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingTwo}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingTwo}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingTwo}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingTwo}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextTwo} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtTwo} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
            <Col xs={4} md={4} style={{justifyContent: 'space-around'}}>
            <div className='panel panel-default'>
            <table className='table table-responsive table-bordered'>
              <tbody>
                <tr>
                  <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.overallRatingThree}</td>
                  <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.accessibilityRatingThree}</td>
                  <td style={{textAlign: 'center'}}> {this.state.cleanlinessRatingThree}</td>
                  <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.activitiesRatingThree}</td>
                </tr>
                <tr> <td colSpan={4}>{this.state.reviewTextThree} </td></tr>
                <tr> <td colSpan={4}>{this.state.createdAtThree} </td></tr>
              </tbody>
            </table>
            </div>
            </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col Col xs={4} md={4} >
          <img src={key} alt='review-table-key' />
          </Col>
        </Row>
        
</Row>

</div> 
</Container>

  );
}
}

export default ParkReviews;
