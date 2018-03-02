import { connect } from 'react-redux';
import { addRecordEmailName, deleteRecord, updateFormFieldValue } from './actionsRedux/actions';
import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import App from './presentationElements/App.js';

const mapStateToProps = (state) => {
	const props = { records: state.addDeleteRecord.records };
	console.log('props: ', props);
	console.log('state is ', state);
	return props;
};

const mapDispatchToProps = {
	addRecordEmailName, 
	deleteRecord,
	updateFormFieldValue 
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
