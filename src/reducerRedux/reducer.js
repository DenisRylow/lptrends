import { checkName, checkEmail } from '../validation/validationMethods.js';
import { getRecordsFromLocal, writeRecordsToLocal } from './localStorage';

const addToRecordsEmailName = (state) => {
	let record = { 
		name: state.forms['name'], 
		email: state.forms['email']
	};
	return Object.assign({}, state, {
		records: state.records.concat([record])
	});
};

export const addDeleteRecord = (state = {}, action) => {
	/*
	State has three properties: 
	1. 'records' property is an array 
	where records containing names and emails are stored. 
	2. 'forms' is a property where input values from all forms are stored.
	3. 'errorFlags' is a property that 
	indicates whether the input of each corresponding form is valid.
	*/
	switch (action.type) {
		/* 
		It is assumed that the redux-form containing 
		email input field is called 'email' and its input field value
		is stored in 'forms' object in a property called 'email'.
		Similarly, the redux form called 'name' containes the name
		and the value of the corresponding input field. This value
		is stored in property 'name' of 'forms' object.
		
		Deep copy of state is needed, otherwise state is mutated 
		and redux no longer works properly. 
		I use JSON.parse(JSON.stringify(state)); for deep copy.
		*/
		case 'RESET_ERROR_FLAG':
			var newState = JSON.parse(JSON.stringify(state));
			newState.errorFlags[action.formName] = 'valid';
			console.log('Reset flag for form ', action.formName);
			return newState;
		case 'ADD_RECORD_EMAIL_NAME':
			var newState = JSON.parse(JSON.stringify(state));
			return addToRecordsEmailName(newState);
		case 'VALIDATE_ADD_RECORD_EMAIL_NAME':
			var newState = JSON.parse(JSON.stringify(state));
			newState.errorFlags['name'] = checkName(newState.forms['name']);
			newState.errorFlags['email'] = checkEmail(newState.forms['email']);
			if (newState.errorFlags['name'] == 'valid' && newState.errorFlags['email'] == 'valid') {
				console.log('Adding a new record to the table.');
				newState = addToRecordsEmailName(newState);
				writeRecordsToLocal(newState);
				return newState;
			} else {
				console.log('Input is invalid. No record has been added.');
				return newState;
			};
		case 'DELETE_RECORD':
			var newState = JSON.parse(JSON.stringify(state));
			console.log('Deleting record.');
			newState = Object.assign({}, newState, {
				records: newState.records.filter(function (item, index) {
						return index == action.id ? false : true;
					})
			});
			writeRecordsToLocal(newState);
			return(newState);
		case 'UPDATE_FORM_FIELD_VALUE':
			var newState = JSON.parse(JSON.stringify(state));
			newState.forms[action.formName] = action.value;
			console.log('Updated form field ', action.formName, ' with ', newState.forms[action.formName]);
			return newState;
		default:
			return state
	}
}

