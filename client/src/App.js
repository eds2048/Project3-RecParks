import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import { Container, Row, Col } from "./components/Grid";


function App() {
  return (
    <div>
      <Jumbotron />
      <Navbar />
      <Header />
      <Container>
      <Row>
          Here's a Row
        <Col size="xs-9 sm-10">
          Column 1
        </Col>
        <Col size="xs-9 sm-10">
          Column 2
        </Col>  
      </Row>
      </Container>
    </div>
  );
}

export default App;
