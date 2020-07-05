import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col} from "./components/Grid";
import Footer from "./components/Footer";
import Card from "./components/Grid/Card";
import ParkDetails from "./components/Grid/ParkDetails";
import ParkPhoto from "./components/Grid/ParkPhoto";
import ParkAddress from "./components/Grid/ParkAddress";
import ParkRating from "./components/Grid/ParkRating";




function App() {
  return (
    <div>
      <Jumbotron />
      <Navbar />
      <Header />
      <Container>

      {/* Start first row */}
      <Row>
        <Col size="sm-12">
          <ParkDetails>
          </ParkDetails>
        </Col>
      </Row>

      {/* Start second row */}
      <Row>
        <Col size="sm-4">
            <ParkPhoto>
            </ParkPhoto>
        </Col>
        <Col size="sm-4">
            <ParkAddress>
            </ParkAddress>
        </Col>
        <Col size="sm-4">
            <ParkRating>
            </ParkRating>
        </Col>  
      </Row>

      {/* Start second row */}
      <Row>
        <Col size="sm-4">
          <Card>
          </Card>
        </Col>

        <Col size="sm-4">
          <Card>
          </Card>
        </Col>
        <Col size="sm-4">
          <Card>
          </Card>
        </Col>
      </Row>



      </Container>
      <Footer />
    </div>
  );
}

export default App;


