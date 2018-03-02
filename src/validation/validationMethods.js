export function checkStr(str, pattern) {
	/*/^[A-Z][a-z]{3,49}$/;*/
	return(pattern.test(str) ? 'valid' : 'invalid') 
}

export function checkName(name) {
	return checkStr(name, /^[A-Z][a-z]{3,49}$/)
}

export function checkEmail(email) {
	// Not perfect!
	return checkStr(email, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
