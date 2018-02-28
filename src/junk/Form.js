import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ReduxFormWithValidation = props => {
	const { handleSubmit, pristine, reset, submitting } = props
	render() {
		return(
			<form onSubmit={ handleSubmit }>
				<div>
					<Field name="fieldValue" component="input" type="text"/>
				</div>
			</form>
		);
	}
} 
{/*
let ReduxFormWithValidation = props => {
  const { handleSubmit } = props
  return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field name="fieldValue" component="input" type="text"/>
			</div>
		</form>
  )
}
*/}

const ReduxFormWithValidation2 = reduxForm({
	form: 'ReduxFormWithValidationForm'
})(ReduxFormWithValidation)

export default ReduxFormWithValidation2;