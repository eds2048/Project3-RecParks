import React from "react";
import { Container, Row, Col} from "../../components/Grid";
import "./index.css";
import Map from "./map_placeholder.png";
import ParkTable from "../../components/Grid/ParkTable";
import InfoCard from "../../components/Grid/InfoCard";
import ReviewCard from "../../components/Grid/ReviewCard";
import Logo from "../../components/nyc_parks.png"

function Main() {
  return (
    <div>
    <Container>
    <Row>
    <Col size="xs-12 sm-12">
    <div className="card">
            <div className="card-body">
            <img src={Map} alt="map_placeholder" style={{height: "75%", objectFit: "cover", width: "100%"}}/>
                <p className="card-text">
                </p>
            </div>
        </div>
    </Col>
    </Row>

    <Row>
    <Col size="xs-8 sm-8">
      <ParkTable>
      </ParkTable>
    </Col>
    <Col size="xs-4 sm-4">
      <div className="card">
        <div className="card-body">
        <p>Featured Park</p>
        <img src={Logo} alt="park_placeholder" style={{height: "50%", objectFit: "cover", width: "100%"}}/>
        </div>
      </div>
    </Col>
    </Row>

    <Row>
    <Col size="xs-8 sm-8">
    <InfoCard>
    </InfoCard>
    </Col>
    </Row>

    <Row>
      <Col size="xs-8 sm-8">
      <ReviewCard>
      </ReviewCard>
      </Col>  
    </Row>
    <br />
    <br />

    </Container>
    </div>
  );
}

export default Main;
//use bootstrap to get width / use fixed height for both rows
//highlight park in the table so it is clear
// add button in "additional details" to "show reviews"