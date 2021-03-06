import { connect } from 'react-redux';

import { 
	validateAndAddRecordEmailName,
	deleteRecord,
	updateFormFieldValue,
	resetErrorFlag 
} from './actionsRedux/actions';

import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import App from './presentationElements/App.js';

const mapStateToProps = (state) => {
	const props = { 
		records: state.addDeleteRecord.records,
		errorFlags: state.addDeleteRecord.errorFlags
	 };
	console.log('props: ', props);
	console.log('state is ', state);
	return props;
};

const mapDispatchToProps = {
	validateAndAddRecordEmailName, 
	deleteRecord,
	updateFormFieldValue,
	resetErrorFlag 
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
