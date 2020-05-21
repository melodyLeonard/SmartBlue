import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};

const middleware = [ thunk ];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export const persistor = persistStore(store);
export default { persistor, store };
