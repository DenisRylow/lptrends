import { createStore, combineReducers, applyMiddleware } from 'redux';
import addDeleteRecord from './reducer';

export const reducer = combineReducers({
  //form: reduxFormReducer,// mounted under "form"
  addDeleteRecord 
});

export const initialState = {
						records:[
						        	{
						        		"name": "Mike",
						        		"nameStatus": "valid",
						        		"email": "mike@mail.com",
						        		"emailStatus": "valid"
						        	},
						        	{
						        		"name": "John",
						        		"nameStatus": "valid",
						        		"email": "mike!mail.com",
						        		"emailStatus": "invalid"
						        	},
						        	{
						        		"name": "agent007",
						        		"nameStatus": "invalid",
						        		"email": "007@mi5.uk",
						        		"emailStatus": "valid"
						        	}
					        	]
					  };

function configureStore(initialState = {}) {  
  const store = createStore(reducer, initialState);
  return store;
};

export const store = createStore(reducer, initialState);  
