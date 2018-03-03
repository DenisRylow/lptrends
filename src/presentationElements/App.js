import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../css/App.css';
import ReduxFormContainer from './Form';
import RemoteSubmitButton  from './AddButton';
import TableRowWithRecordInformation  from './TableRowWithRecord';
import Warning from './Warning';

class App extends React.Component {
	render() {
		return(
			<div>
				{/* Trigger warning. */}
				<Warning errorFlags={this.props.errorFlags}/> 
				
				{/* Table with emails  */}
				<Table className='table'>
				<tbody>					
					<tbody>
						<td className="header">Name</td>
						<td className="header">Email</td> 
						<td className="header"> </td>
					</tbody>

					{/*
					Table row with information input forms and a button
					to add the record to the table. 
					*/}
					<tbody>
					{/* 
					There is a single form with a single input field in each 'ReduxFormContainer'.		
					The callback function 'this.props.updateFormFieldValue' is sent to every container.
					This function updates the 'forms' object in the global Redux state which
					stores the value of each corresponding form.
					Updating is done via Redux dispatch.
					*/} 
					<td className='secondRow'>
						<ReduxFormContainer 
						name='name'
						placeHolderText='Enter name' 
						errorFlag={this.props.errorFlags['name']} 
						onChangeAction={(value, formName)=> {
							this.props.updateFormFieldValue(value, formName);
							this.props.resetErrorFlag(formName);
						}} /> 
					</td>
					{/* 
					Everytime the input fields in forms change, the unput values are written to global
					Redux state via this.props.updateFormFieldValue(value, formName) method.  
					*/} 
					<td className='secondRow'>
						<ReduxFormContainer 
						name='email'
						placeHolderText='Enter email'
						errorFlag={this.props.errorFlags['email']} 
						onChangeAction={(value, formName)=> {
							this.props.updateFormFieldValue(value, formName);
							this.props.resetErrorFlag(formName);
						}} />   
					</td>
					<td className="secondRow">
						{/*  
						This button performs validation and dispatches an action via
						Redux to add the record consisting of name and email to the table.
						*/} 
						<RemoteSubmitButton onClick={() => 
							this.props.validateAndAddRecordEmailName
						}/>				
					</td>
					</tbody>
					{/*  
					Table rows with record information and a delete button.
					*/}
					{(typeof this.props.records != 'undefined') && 
					this.props.records.map((item, index) => (
						<TableRowWithRecordInformation 
						record={item}
						index={index}
						onClick={this.props.deleteRecord}/>
					))}
				</tbody>
				</Table> 
			</div>
		);
	}
}

export default App;
