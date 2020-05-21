import React, { useState, useEffect } from 'react';
import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Input, Row, Col } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectIsSignInLoading, selectAuthError, selectCurrentUser } from '../../redux/auth/authSelector';
import { userSignIn, clearErrors } from '../../redux/auth/authActions';

import Spinner from '../spinner/Spinner';
import Alert from '../alert/Alert';
import Footer from '../Footer/Footer';
import './signin.css';

const SignIn = ({ isLoading, userSignIn, error, clearErrors, history, currentUser }) => {
	const [ formInputs, setFormInputs ] = useState({
		email: '',
		password: '',
	});
	useEffect(
		() => {
			if (currentUser) {
				return history.push('/user/dashboard');
			}
		},
		// eslint-disable-next-line
		[ currentUser ],
	);
	const handleInputChange = (e) => {
		const { value, name } = e.target;
		return setFormInputs({ ...formInputs, [name]: value });
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		return userSignIn(formInputs);
	};
	return (
		<div className="auth-container">
			
			<Col sm="11" md="5">
				<div className="sm-logo">

			<h1 className="showcase-text">
              <strong>SmartBlue Money</strong>
            </h1>
				</div>
				<Card className="card-user p-3">
					{isLoading && <Spinner />}
					{error && <Alert tag="Auth Error" content={error.message} color="danger" toggle={clearErrors} />}
					<CardHeader>
						<CardTitle tag="h5">Account Sign In</CardTitle>
					</CardHeader>
					<CardBody>
						<Form onSubmit={handleFormSubmit}>
							<Row>
								<Col className="pr-1 pl-1" md="12">
									<FormGroup>
										<label>Email</label>
										<Input
											name="email"
											value={formInputs.email}
											onChange={handleInputChange}
											required
											placeholder="your email"
											type="email"
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col className="pr-1 pl-1" md="12">
									<FormGroup>
										<label>Password</label>
										<Input
											name="password"
											value={formInputs.password}
											onChange={handleInputChange}
											required
											placeholder="your password"
											type="password"
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<div className="update mr-auto">
									<Button color="primary" type="submit">
										Sign In
									</Button>
								</div>
							</Row>
						</Form>
					</CardBody>
				</Card>
				<a href="/home" className="secondary-btn">Go back home</a>
			</Col>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsSignInLoading,
	error: selectAuthError,
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { userSignIn, clearErrors })(SignIn);
