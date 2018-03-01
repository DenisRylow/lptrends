import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
//https://stackoverflow.com/questions/40509754/how-do-you-pass-in-a-dynamic-form-name-in-redux-form

class ReduxForm extends Component {
	render() {
		const {handleSubmit, reset} = this.props;
		return(
			<form onSubmit={ handleSubmit }>
				<div>
					<Field name="fieldValue" component="input" type="text"/>
				</div>
			</form>
		);
	}
} 

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.name,
        onSubmit: ownProps.submit
    }
}

export default compose(
    connect(mapStateToProps),
    reduxForm({})
)(ReduxForm);