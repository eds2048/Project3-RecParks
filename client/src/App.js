import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col} from "./components/Grid";
import Footer from "./components/Footer";
import ReviewCard from "./components/Grid/ReviewCard";
import InfoCard from "./components/Grid/InfoCard";
import EnviroCard from "./components/Grid/EnviroCard";


function App() {
  return (
    <div>
      <Navbar />
      <Container>
      <Header />
      <Jumbotron />

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
      <Footer />
    </div>
  );
}

export default App;
