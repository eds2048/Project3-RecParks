import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from "./index.css";
import parksData from '../../data/Parks.json';
import { addReview as reviewAPI } from '../../utils/API';
import { Input, FormBtn } from '../../components/Form';

class AddReview extends Component {
  constructor(props) {
	super(props);
  this.state = {
    park_id: '',
    review_text: '',
    overall_rating: 3,
    accessibility_rating: 3,
    cleanliness_rating: 3,
    activities_rating: 3
  };
}

  // When the component mounts, get a list of all available base breeds and update this.state.breeds

	handleInputChange = event => {
    const { name, value } = event.target;
		this.setState({
			[name]: value
    });}


  handleFormSubmit = event => {

		event.preventDefault();
    
    // validate all fields
    if (!this.state.park_id || !this.state.overall_rating)  {
		  this.props.setLoading(false);
      // set error alert to user
      // return this.props.setAlertInfo({theme:"warning", message:"Please fill all required fields"})
    }

   
    console.log(this.state.park_id.trim(),
    this.state.overall_rating,
    this.state.accessibility_rating,
    this.state.cleanliness_rating,
    this.state.activities_rating,
    this.state.review_text.trim())
    // if good to go
    reviewAPI
    
				.addReview({
					park_id: this.state.park_id.trim(),
          overall_rating: this.state.overall_rating,
          accessibility_rating: this.state.accessibility_rating,
          cleanliness_rating: this.state.cleanliness_rating,
          activities_rating: this.state.activities_rating,
          review_text: this.state.review_text.trim()
				})
				.then(res => {
					if (res.status === 200) {
						this.props.setLoading(false);
						this.props.setUser(res.data);
						return <Redirect to='/home' />;
					} else {
						console.log(res.response)
						this.props.setLoading(false);
						// this.props.setAlertInfo({
						// 	theme: 'warning',
						// 	message: res.response.data.message
						// });
					}
				})
				.catch(res => {
					this.props.setLoading(false);
					// this.props.setAlertInfo({ theme: 'warning', message: res.response.data });
				});
	};

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
      <div className="form-group">
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

        <label htmlFor="overall">Overall Park Quality: (1 = worst, 5 = best)</label>
        <select id="overall_rating" name="overall_rating" value={this.state.overall_rating} onChange={this.handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <br></br>
        <label htmlFor="accessibility">Facilities Quality: (1 = worst, 5 = best)</label>
        <select id="accessibility_rating" name="accessibility_rating" value={this.state.accessibility_rating} onChange={this.handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <br></br>
        <label htmlFor="cleanliness">Facilities Quality: (1 = worst, 5 = best)</label>
        <select id="cleanliness_rating" name="cleanliness_rating" value={this.state.cleanliness_rating} onChange={this.handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <br></br>
        <label htmlFor="activities">Available Activities Rating: (1 = worst, 5 = best)</label>
        <select id="activities_rating" name="activities_rating" value={this.state.activities_rating} onChange={this.handleInputChange} default="3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value ="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        
        <br></br>
        <label htmlFor="review_text">Park Review:</label>
        <br></br>
        <Input
          value={this.state.review_text}
          onChange={this.handleInputChange}
          name="review_text"
          type="text"
          placeholder="Enter Park Review Here"
          id="review_text"
          class="reviewInput"
        />
        <br></br>
        <FormBtn type="submit" className="btn btn-success">
          Add Review
        </FormBtn>
      </div>
    </form>
    );
  };
}

export default AddReview;
