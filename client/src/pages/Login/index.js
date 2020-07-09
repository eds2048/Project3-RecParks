import React from "react";
import "./index.css";

function Login() {
  return (
          <div class="container">
          <div class="col-6 col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          </nav>
          </div> 
      
            <li class="col-6 col-sm-12">  
              <ul class="navbar-right">
                <form class="login form-inline">
                    <li class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="email-input" placeholder="Email">
                    </input></li>
                    <li class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="password-input" placeholder="Password">
                      </input></li>
                  
                    <button type="submit" class="btn btn-default">Login</button>
                    <br />
        <p>Or sign up <a href="/signup">here</a></p>
                  </form>
                </ul> 
              </li>
            </div>

  );
}

export default Login;
