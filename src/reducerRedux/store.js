import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addDeleteRecord } from './reducer';
import { reducer as reduxFormReducer } from 'redux-form';

export const reducer = combineReducers({
  form: reduxFormReducer,// mounted under "form"
  addDeleteRecord
});

export const  records = [
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
			        	];

function configureStore(initialState = {}) {  
  const store = createStore(reducer, initialState);
  return store;
};

export const store = createStore(reducer, {
	addDeleteRecord: {
			records: records, 
			forms: {}, 
			errorFlags: {} 
		}
	});  
