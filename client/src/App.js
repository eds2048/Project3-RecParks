import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col} from "./components/Grid";
import Footer from "./components/Footer";
import Card from "./components/Grid/Card";


function App() {
  return (
    <div>
      <Jumbotron />
      <Navbar />
      <Header />
      <Container>

      {/* Start first row */}
      <Row>
        <Col size="xs-9 sm-10">
          <Card>
          </Card>
        </Col>
        <Col size="xs-9 sm-10">
            <Card>
            </Card>
        </Col>  
      </Row>

      {/* Start second row */}
      <Row>
        
      <Col size="xs-9 sm-10">
            <Card>
            </Card>
      </Col>
          <Col size="xs-9 sm-10">
        
      </Col>
      </Row>



      </Container>
      <Footer />
    </div>
  );
}

export default App;
