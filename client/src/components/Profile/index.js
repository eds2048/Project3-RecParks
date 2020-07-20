import React, {Component} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../pages/nyc_parks.png';
import style from "./style.module.css";


function Profile(props) {
    console.log(props.user)
    return(
        <div>
            <Container>
                <Row className={style.header}>
                    <h1> Welcome {props.user.email}! </h1>
                    <p>Member Since {props.user.createdAt}</p>
                </Row>
                <Row>
                    <Col xs={4} sm={4} md={3}>
                        <div className='profile'>
                        <img src={logo} alt='profile-pic' />
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={9}>
                        <div>

                            <ul className='list'>
                            <h4 style={{fontWeight: 'bold'}}> Parks I've Reviewed </h4>
                                <li> Park Id: </li>
                                <li> Review:  </li>
                                <li> Submission Time: </li>
                            </ul>
                            <ul>
                                <li> Park Name:  </li>
                                <li> Review:  </li>
                                <li> Submission Time:</li>
                            </ul>
                            <ul>
                                <li> Park Name: </li>
                                <li> Review:  </li>
                                <li> Submission Time:</li>
                            </ul>
                        </div>
                    </Col>
            </Row>
            <Row>
                <p style={{textAlign: 'center'}}> **** </p>
            </Row>
            </Container>
        </div>
    )
};

export default Profile;