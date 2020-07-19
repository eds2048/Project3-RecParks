import React from "react";
import { user as userAPI } from '../../utils/API';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import Logo from '../../pages/nyc_parks.png';

const styles = {
  navtab: {
	backgroundColor: "#b4d993",
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
			styles={{ padding: 4, color: 'white', lineHeight: '20px', justifyContent: 'space-around'}}
			className='bg-success'
		>
			{ props.user.id 
				?  <a> <Link to='/'><Button theme='outline'>Home</Button></Link> 
					<Link to='/addReview'><Button theme='outline'>Add Park Review</Button></Link>
					 <Link to='/parkReviews'><Button theme='outline'>View Park Reviews</Button></Link>
					<Button theme='dark' onClick={signout}>Sign Out</Button></a>
				:   <a> <Link to='/'><Button theme='outline'>Home</Button></Link> 
					<Link to='/login'><Button theme='outline'>Log In</Button></Link>
					<Link to='/signup'><Button theme='outine'>Sign Up</Button></Link></a>
			}

		</div>

	);
};

export default Navbar;