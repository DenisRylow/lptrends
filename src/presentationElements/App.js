import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../css/App.css';
import ReduxFormContainer from './Form';
import RemoteSubmitButton  from './AddButton';
import TableRowWithRecordInformation  from './TableRowWithRecord';
import Warning from './Warning';

class App extends React.Component {
	produceWarning(errorFlags) {
		if(errorFlags['email'] != 'valid' || errorFlags['name'] != 'valid') {
			return(
				<div ref="warning" className="alert alert-warning" role="alert">
					Ошибка при вводе данных. Имя должно начинаться с большой буквы и быть длинной не менее 4 символов.
					Электронная почта должна быть верного формата.
				</div>
			);
		}
	}
	render() {
		return(
			<div>
				{/* Trigger warning. */}
				{/* For some reason Warning component does not work.
				this.props.errorFlags change but the state inside the component is not updated. 	
				So for now I am using a function to render the warning.

				<Warning errorFlags={this.props.errorFlags}/> 
				*/}	
				{this.produceWarning(this.props.errorFlags)}

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
