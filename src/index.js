'use strict';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from './reducerRedux/store';
import { createStore } from 'redux';

import AppContainer from './AppContainer';

ReactDOM.render(	
	<Provider store={store}>
		<AppContainer />
        </Provider>,
	document.getElementById('app')
)

