import React from "react";
import { user as userAPI } from '../../utils/API';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';

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
		<div>
			<ul className='nav nav-tabs' style={styles.navtab}>
				<li className='nav-item'><Link to='/'> Home </Link></li>
				{ props.user.div
				? <li className='nav-item'>
					<Link to='/addReview' style={{display: 'inline-block'}}>Add Park Review</Link>
					<Link onClick={signout} style={{display: 'inline-block'}}>Sign Out</Link></li>
				: <li className='nav-item'>
					<Link to='/login' style={{display: 'inline-block'}}>Login</Link>
					<Link to='/signup' style={{display: 'inline-block'}}>Sign Up</Link>
				</li>
				}
			</ul>
		</div>

		// <div style={styles.navtab}>
		// 	<ul className="nav nav-tabs">
		// 		<li className="nav-item nav-link d-flex flex-row" style={{fontWeight: "bold", fontSize: "large"}}>
		// 		<Link to='/'> Home </Link>
		// 		</li>
			
		// 		{ props.user.id 
		// 		?  <li className="nav-item nav-link d-flex flex-row" style={{fontWeight: "bold", fontSize: "large"}}> <Link to='/addReview'>Add Park Review</Link>
		// 			<Link to='/parkReviews'>View Park Reviews</Link>
		// 			<Button theme='dark' onClick={signout}>Sign Out</Button></li>
		// 		:   <li className="nav-item nav-link d-flex flex-row" style={{fontWeight: "bold", fontSize: "large"}}>
		// 			<Link to='/login'>Log In</Link>
		// 			<Link to='/signup'>Sign Up</Link></li>
		// 	}	
		// 	</ul>
		// </div>
	);
};

export default Navbar;