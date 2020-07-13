import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddReview from './pages/AddReview';

import Main from './pages/Main';

import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { user as userAPI } from "./utils/API";
import './App.css';

function App() {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

   useEffect(() => {
		// no catch, add if you want to check for it.
		// only setting user if we got one, to avoid rerendering the page.
		userAPI.authenticate()
			.then(res => res.data ? setUser(res.data) : 0)
			// repress the authenticate route error if recieved one.
			.catch(e => console.log(e))
   }, []);
   
	return (
		<>
			<Router>
				<Route render={ props => 
					<Navbar user={user} setUser={setUser} {...props} />
				} />
				<Switch>
					<Route
						exact
						path='/'
						render={ props => (
							<Main/>
						)}
					/>
					<Route
						exact
						path='/login'
						render={ props => (
							<Login
								{...props}
								{...{ user, setUser, setLoading}} 
							/>
						)}
					/>
					<Route 
						exact 
						path='/signup' 
						render={ props => 
							<Signup
								{...props}
								user={user}
								setUser={setUser}
								setLoading={setLoading} 
							/>
						}
						{...{ user, setUser, setLoading}} />
					<Route
						exact
						path='/AddReview'
						render={ props => (
							<AddReview
								/>
						)}
					/>
					<ProtectedRoute exact path="/home" {...{user, loading, Component: Main} } />
					<Route component={NoMatch} />
				</Switch>
			</Router>
			
		</>
	);
}

export default App;
