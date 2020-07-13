import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./pages/Main/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col} from "./components/Grid";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Wrapper>

      <Container>
      <Header />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/" component={Profile} />
          <Route exact path="/" component={Main} />
      </Container>
      </Wrapper>
      
      </Router>
      <Footer />
    </div>
  );
}

export default App;


