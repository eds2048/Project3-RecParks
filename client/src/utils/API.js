import axios from "axios";

export default {
  signUpFunction: function(email, password) {
    return axios.post("api/signup", { params: { email: email, password: password } });
  }
};
