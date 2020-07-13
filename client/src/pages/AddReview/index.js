import React, {Component} from "../../../node_modules/react";
import style from "./index.css";
import parksData from '../../data/Parks.json';

class AddReview extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <form className="search">
      <div className="form-group">
        <label htmlFor="park">Park Name:</label>
        <input
          onChange={this.handleInputChange}
          name="park"
          list="parks"
          type="text"
          className="form-control"
          placeholder="Type in park name to begin"
          id="park"
        />
        <datalist id="parks">
          {parksData.map(parksData => (
            <option value={JSON.stringify(parksData.park_name).replace(/['"]+/g, '')} key={parksData.park_id} />)
          )}
        </datalist>
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    );
  }
}

export default AddReview;
