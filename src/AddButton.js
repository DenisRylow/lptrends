import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'react-bootstrap';
import './App.css';

const RemoteSubmitButton = ({ dispatch, forms }) => (
	<Button 
	className="customButton"
	onClick={() => {
		forms.forEach((item) => dispatch(submit(item)));
		//console.log(forms);
	}}> 
		 Add
	</Button>
);

export default connect()(RemoteSubmitButton);
