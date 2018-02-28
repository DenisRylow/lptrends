import { connect } from 'react-redux';
import { addRecord, deleteRecord } from './actions/actions';
import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './App.css';
import App from './App.js';

const mapStateToProps = (state) => {
	//const props = { records: state.records };
	const props = { records: state.addDeleteRecord.records };
	console.log('props: ',props);
	console.log('state is ',state);
	return props;
};

const mapDispatchToProps = {
	addRecord, 
	deleteRecord 
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default AppContainer;
