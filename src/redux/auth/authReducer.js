import { SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, CLEAR_ERRORS } from './authTypes';
const initialState = {
	currentUser: null,
	error: null,
	isSignUpLoading: false,
	isSignInLoading: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				isSignInLoading: false,
				currentUser: action.payload,
				error: null,
			};
		case SIGN_IN_FAILURE:
			return {
				...state,
				isSignInLoading: false,
				error: action.payload,
			};
		case SIGN_IN_START:
			return {
				...state,
				isSignInLoading: true,
				error: null,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};

export default userReducer;
