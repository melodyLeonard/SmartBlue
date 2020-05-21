import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import appState from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';

const hist = createBrowserHistory();
const { store, persistor } = appState;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hist}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
