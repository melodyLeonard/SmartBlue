import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'loan' ], // what we want to persist
};

const rootReducer = combineReducers({
	auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
