import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/auth/authSelector';

const PrivateRoute = (props) => {
	const { component: Component, currentUser, ...rest } = props;
	return <Route {...rest} render={(items) => (currentUser ? <Component {...items} /> : <Redirect to="/signin" />)} />;
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
