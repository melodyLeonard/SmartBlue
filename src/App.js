import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/scss/paper-dashboard.scss?v=1.1.0';
import 'assets/demo/demo.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import AdminLayout from 'layouts/Admin.jsx';
import SignIn from 'components/signin/SignIn';
import PrivateRoute from 'components/privateRoute/PrivateRoute';
import LandingPage from 'components/landingPage/LandingPage';

const App = () => {
	return (
		<Switch>
			<Route path="/home" component={LandingPage} />
			<Route path="/signin" component={SignIn} />
			<PrivateRoute path="/user" component={AdminLayout} />
			<Redirect to="/signin" />
		</Switch>
	);
};

export default App;
