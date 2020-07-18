import React from "react";
import Logo from "../nyc_parks.png";
import { user as userAPI } from '../../utils/API';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';

const styles = {
  card: {
    background: "#e8eaf6"
  },
  heading: {
    background: "#006400",
    maxHeight: 50,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 10px",
    width: "auto"
  },
  login: {
    marginRight: 20,
    textAlign: "right",
  },
  img: {
    maxHeight: 40,
    position: "relative",
    paddingBottom: "3px"
  }
};

function Navbar(props) {
const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => {
				throw e;
			});
	};
let location = useLocation();
    return (
		<div
			styles={{ padding: 4, color: 'white', lineHeight: '20px' }}
			className='bg-success'
		>
			<Link to='/'> 
			<img src={Logo} />
				
			</Link>
			{ props.user.id 
				?  <a> <Link to='/'><Button theme='primary'>Home</Button></Link> 
					<Link to='/addReview'><Button theme='primary'>Add Park Review</Button></Link>
					 <Link to='/parkReviews'><Button theme='primary'>View Park Reviews</Button></Link>
					<Button theme='dark' onClick={signout}>Sign Out</Button></a>
				:   <a> <Link to='/'><Button theme='primary'>Home</Button></Link> 
					<Link to='/login'><Button theme='primary'>Log In</Button></Link>
					<Link to='/signup'><Button theme='primary'>Sign Up</Button></Link></a>
			}
		</div>
	);
};

export default Navbar;