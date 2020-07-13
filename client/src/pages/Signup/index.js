import React from "react";
import "./index.css";

function Login() {
  return (
  
    <div className="container">
      <form>
      <div className="form-row">
        <div className="col-md-6">
        <label for="exampleInputEmail1">Email Address</label>
        <input type="email" class="form-control" id="email-input" placeholder="example@email.com">
          </input>
        </div>
      </div>
      <div className="form-row">
      <div className="col-md-6">
        <br />
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="password-input" placeholder="Password!123">
          </input>
        </div>
      </div>
      <br />
      <div className="form-row">
        <div className="col-sm-10">
        <button type="submit" class="btn btn-default ">Sign Up</button>
        </div>
      </div>   
      </form>
      <br />
      <br />
    </div>

  );
}

export default Login;
