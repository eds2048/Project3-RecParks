import React, {Component} from 'react';
import parksData from '../../data/Parks.json';
import {user as userAPI} from '../../utils/API'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../../pages/nyc_parks.png';
import style from "./style.module.css";
import key from '../../pages/Main/review_key.png'

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: [],
            userEmail: [],
            memberSince: [],
            reviewOneParkName: [],
            reviewOneParkId: [],
            reviewOneText: [],
            reviewOneOverall: [],
            reviewTwoParkId: [],
            reviewTwoText: [],
            reviewTwoOverall: []
          }
    };

    componentWillMount() {
        userAPI.authenticate()
        .then((result) => {
            console.log(result.data)
          this.setState({
            userId: result.data.id,
            userEmail: result.data.email,
            memberSince: result.data.createdAt,
            reviewOneParkName: parksData[(result.data.reviews[0].park_id)].park_name,
            reviewOneParkId: result.data.reviews[0].park_id,
            reviewOneText: result.data.reviews[0].review_text,
            reviewOneOverall: result.data.reviews[0].overall_rating,
            reviewOneAccess: result.data.reviews[0].accessibility_rating,
            reviewOneClean: result.data.reviews[0].cleanliness_rating,
            reviewOneActivities: result.data.reviews[0].activities_rating,
            reviewTwoParkName: parksData[(result.data.reviews[1].park_id)].park_name,
            reviewTwoParkId: result.data.reviews[1].park_id,
            reviewTwoText: result.data.reviews[1].review_text,
            reviewTwoOverall: result.data.reviews[1].overall_rating,
            reviewTwoAccess: result.data.reviews[1].accessibility_rating,
            reviewTwoClean: result.data.reviews[1].cleanliness_rating,
            reviewTwoActivities: result.data.reviews[1].activities_rating,
          })
        })
        .catch(err => console.log(err))
    };

    render() {

        return(
            <div>
            <Container>
                <Row className={style.header}>
                    <h1> Welcome {this.state.userEmail}! </h1>
                    <p>Member Since {this.state.memberSince}</p>
                </Row>
                <Row>
                    <Col xs={4} md={6}>
                        <div className={style.profile}>
                        <img src={logo} alt='profile-pic'/>
                        <img src={key} alt='review-key' className={style.key}/>                        
                        </div>
                    </Col>
                    <Col xs={4} md={4} style={{paddingTop: '20px'}}>
                        <div className='panel panel-default'>
                        <table className='table table-responsive table-bordered'>
                        <tbody>
                            <tr> <td colSpan={4}>{this.state.reviewOneParkId} - {this.state.reviewOneParkName}</td></tr>
                            <tr>
                            <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.reviewOneOverall}</td>
                            <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.reviewOneAccess}</td>
                            <td style={{textAlign: 'center'}}> {this.state.reviewOneClean}</td>
                            <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.reviewOneActivities}</td>
                            </tr>
                            <tr> <td colSpan={4}>"{this.state.reviewOneText}" by {this.state.userEmail} </td></tr>
                        </tbody>
                        </table>
                        </div>
                    </Col>
                    <Col xs={4} md={4} style={{paddingTop: '20px'}}>
                        <div className='panel panel-default'>
                        <table className='table table-responsive table-bordered'>
                        <tbody>
                            <tr> <td colSpan={4}>{this.state.reviewTwoParkId} - {this.state.reviewTwoParkName} </td></tr>
                            <tr>
                            <td style={{backgroundColor: '#7bba4b', textAlign: 'center'}}> {this.state.reviewTwoOverall}</td>
                            <td style={{backgroundColor: '#999c9d', textAlign: 'center'}}>{this.state.reviewTwoAccess}</td>
                            <td style={{textAlign: 'center'}}> {this.state.reviewTwoClean}</td>
                            <td style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>{this.state.reviewTwoActivities}</td>
                            </tr>
                            <tr> <td colSpan={4}>"{this.state.reviewTwoText}" by {this.state.userEmail} </td></tr>
                        </tbody>
                        </table>
                        </div>
                    </Col>
            </Row>
            </Container>
        </div>

            
        )
    }
      
}

export default Profile;