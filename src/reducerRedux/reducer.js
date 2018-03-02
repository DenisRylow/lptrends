export const addDeleteRecord = (state = {}, action) => {
	switch (action.type) {
		/* 
		It is assumed that the redux form containing 
		email input field is called 'email' and its a input field value
		is stored 'forms' object where in a property called 'email'.
		Similarly, the redux form called 'name' containes the name
		and the value of the corresponding input field. This value
		is stored in property 'name' of 'forms' object.
		*/
		case 'ADD_RECORD_EMAIL_NAME':
			let record = { 
				name: state.forms['name'], 
				email: state.forms['email']
			};
			return Object.assign({}, state, {
				records: state.records.concat([record])
			});
		case 'DELETE_RECORD':
			console.log('Deleting record.');
			return Object.assign({}, state, {
				records: state.records.filter(function (item, index) {
						return index == action.id ? false : true;
					})
			});
		case 'UPDATE_FORM_FIELD_VALUE':
			var newState = Object.assign({}, state);
			newState.forms[action.formName] = action.value;
			console.log('Updated form field ', action.formName, ' with ', newState.forms[action.formName]);
			return newState;
		default:
			return state
	}
}

