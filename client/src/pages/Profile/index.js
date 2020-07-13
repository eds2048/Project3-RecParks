import React from "react";
import "./index.css";
import { Container, Row, Col} from "../../components/Grid";
import Logo from "../../components/nyc_parks.png"

function Profile(){
    return (
    <Container>
        <Row>
            <Col size="xs-4 sm-4">
                <div className="card">
                    <div className="card-body">
                        <img src={Logo} alt="park_placeholder" style={{height: "50%", objectFit: "cover", width: "100%"}}/>
                    </div>
                </div>
            </Col>
            <Col size="xs-8 sm-8">
            <div className="card">
                    <div className="card-body">
                        <p> Welcome [Name]! </p>
                        <ul>
                            <li>Member Since: </li>
                            <li>Favorite Park: </li>
                            <li>Total Reviews: </li>
                        </ul>       
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h5> Reviews</h5>
                    </div>
                    <div className="card-body">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Park Name</td>
                                    <td>Star Rating</td>
                                    <td>Review Snippet (100 Chars) </td>
                                </tr>
                                <tr>
                                    <td>Park Name</td>
                                    <td>Star Rating</td>
                                    <td>Review Snippet (100 Chars) </td>
                                </tr>
                                <tr>
                                    <td>Park Name</td>
                                    <td>Star Rating</td>
                                    <td>Review Snippet (100 Chars) </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
        <Col size="xs-12 sm-12">
        <div className="card">
                    <div className="card-body">
                        <p> Carbon Emmision Tracker </p>
                        <p> [Scrollable List] </p>
                    </div>
                </div> 
        </Col>
        </Row>
        <br />
        <br />
    </Container>

    )
};

export default Profile;