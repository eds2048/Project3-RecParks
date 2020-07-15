import axios from "axios";

export default {
  addReview: function (review) {
    return axios.post("/api/review/addReview", review)
  },

  lastThreeParks: function () {
    return axios.get("/api/review/lastThreeReviews")
  }
}