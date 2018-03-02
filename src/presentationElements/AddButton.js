import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Button } from 'react-bootstrap';
import '../css/App.css';


const RemoteSubmitButton = ({ dispatch, onClick }) => (
	<Button 
	className="customButton"
	onClick={onClick()}> 
		 Add
	</Button>
);

export default connect()(RemoteSubmitButton);
