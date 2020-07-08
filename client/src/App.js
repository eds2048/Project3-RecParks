import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./pages/Main/";
import Login from "./pages/Login/";
import Signup from "./pages/Signup/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col} from "./components/Grid";
import Footer from "./components/Footer";
import ReviewCard from "./components/Grid/ReviewCard";
import InfoCard from "./components/Grid/InfoCard";
import EnviroCard from "./components/Grid/EnviroCard";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Wrapper>
      <Container>
      <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

      <Container>


      <Row>
        <Col size="xs-9 sm-10">
            <InfoCard>
            </InfoCard>
        </Col>  
      </Row>

      <Row>
        <Col size="xs-9 sm-10">
              <ReviewCard>
              </ReviewCard>
        </Col>
      </Row>

      </Container>
      </Container>
      </Wrapper>
      </Router>
      <Footer />
    </div>
  );
}

export default App;


