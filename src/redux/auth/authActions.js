import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../util/setAuthToken';

import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, CLEAR_ERRORS } from './authTypes';

export const userSignIn = (payload) => async (dispatch) => {
	// make request
	dispatch({ type: SIGN_IN_START });
	try {
		const { data: { data } } = await axios.post('/api/v1/users/signin', payload);
		const { token } = data;
		// Set token to ls
		localStorage.setItem('jwtToken', token);
		// Set token to Auth header
		setAuthToken(token);
		// Decode token to get user data
		const decoded = jwt_decode(token);
		return dispatch({ type: SIGN_IN_SUCCESS, payload: { ...data, ...decoded } });
	} catch (err) {
		console.log({ ...err });
		return dispatch({ type: SIGN_IN_FAILURE, payload: err.response.data });
	}
};

export const clearErrors = () => (dispatch) => dispatch({ type: CLEAR_ERRORS });
