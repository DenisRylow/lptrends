export const updateFormFieldValue = (value, formName) => {
	return {
		type: 'UPDATE_FORM_FIELD_VALUE',
		value,
		formName
	}
}

export const addRecordEmailName = () => {
	return {
		type: 'ADD_RECORD_EMAIL_NAME'
	}
}


export const deleteRecord = (id) => {
	return {
		type: 'DELETE_RECORD',
		id
	}
}


