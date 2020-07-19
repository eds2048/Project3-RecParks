import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../pages/nyc_parks.png';
import style from "./style.module.css";

function Profile() {
    return(
        <div>
            <Container>
                <Row className={style.header}>
                    <h1> Welcome User! </h1>
                </Row>
                <Row>
                    <Col xs={4} sm={4} md={4}>
                        <div className='profile'>
                        <img src={logo} alt='profile-pic' />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div>
                            <h4> Parks I've Reviewed </h4>
                            <ul className='list'>
                                <li> Park Name:  </li>
                                <li> Review:  </li>
                            </ul>
                            <ul>
                                <li> Park Name:  </li>
                                <li> Review:  </li>
                            </ul>
                            <ul>
                                <li> Park Name: </li>
                                <li> Review:  </li>
                            </ul>
                        </div>
                    </Col>

            </Row>
            </Container>
        </div>
    )
};

export default Profile;
