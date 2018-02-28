function checkStr(str, pattern) {
	/*/^[A-Z][a-z]{3,49}$/;*/
	return(str.match(pattern) == name ? 'valid' : 'invalid') 
}

function checkName(name) {
	return checkStr(name, /^[A-Z][a-z]{3,49}$/)
}

function checkEmail(email) {
	// Not perfect!
	return checkStr(email, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const addRecord = (name, email) => {
	var record = {
		"name": name,
		"nameStatus": checkName(name),
		"email": email,
		"emailStatus": checkEmail(email)
	};
	return {
		type: 'ADD_RECORD',
		record
	};
};

export const deleteRecord = (id) => {
	return {
		type: 'DELETE_RECORD',
		id
	};
};