import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
import  Input  from './Input';

class ReduxForm extends Component {
	render() {
		const {
			handleSubmit, 
			reset,
			form,
			errorFlag,
			onChangeAction,
			placeHolderText } = this.props;
		return(
			<form onSubmit={ handleSubmit }>
				<div>
					<Field 
					formName={form}
					component={Input}
					errorFlag={errorFlag}
					placeHolderText={placeHolderText}
					onChangeAction={onChangeAction}/>
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

