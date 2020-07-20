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
                    <Col>
                        <div className={style.profile}>
                        <img src={logo} alt='profile-pic' />
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={9}>
                        {/* <div>

                            <ul className='list'>
                            <h4 style={{fontWeight: 'bold'}}> Parks I've Reviewed </h4>
                                <li> Park Id: {props.user.reviews[0].park_id} </li>
                                <li> Review:  {props.user.reviews[0].review_text} </li>
                                <li> Overall Rating: {props.user.reviews[0].overall_rating} </li>
                            </ul>
                            <ul>
                                <li> Park Id: {props.user.reviews[1].park_id} </li>
                                <li> Review:  {props.user.reviews[1].review_text} </li>
                                <li> Overall Rating: {props.user.reviews[1].overall_rating} </li>
                            </ul>
                        </div> */}

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
