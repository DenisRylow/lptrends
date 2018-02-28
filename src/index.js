'use strict';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from './reducer/store';
import { createStore } from 'redux';
import addDeleteRecord from './reducer/reducer';

import AppContainer from './AppContainer';

/* import combinedReducers from "./reducer/combiner.js";
import Stub from './Stub';
import App from './App';

import AppContainer from "./AppContainer";
import App from './App';

import showResults from "./showResults";
import SimpleForm from "./SimpleForm";
import store from "./store";

import AppContainer from './AppContainer';
import store from './reducer/store';

let store = createStore(combinedReducers)
<Provider store={createStore(addDeleteRecord, initialState)}>
*/

ReactDOM.render(	
	  <Provider store={store}>
		 <AppContainer />
	  </Provider>,
	document.getElementById('app')
)

/* 
https://redux-form.com/7.2.3/examples/simple/

ReactDOM.render(
	  <Provider store={store}>
	    <div style={{ padding: 15 }}>
	      <h2>Simple Form</h2>
	      <SimpleForm onSubmit={showResults} />
	    </div>
	  </Provider>,
	document.getElementById('app')
)*/