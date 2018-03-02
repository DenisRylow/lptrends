import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import '../css/App.css';
import ReduxFormContainer from './Form';
import RemoteSubmitButton  from './AddButton';

class App extends React.Component {
	produceAddRow() {
		return(
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
					onChangeAction={(value, formName)=> {this.props.updateFormFieldValue(value, formName)}} /> 
				</td>
				{/* 
				Everytime the input fields in forms change, the unput values are written to global
				Redux state via this.props.updateFormFieldValue(value, formName) method.  
				*/} 
				<td className='secondRow'>
					<ReduxFormContainer 
					name='email'
					placeHolderText='Enter email' 
					onChangeAction={(value, formName)=> {this.props.updateFormFieldValue(value, formName)}} />   
				</td>
				<td className="secondRow">
					{/*  
					This button performs validation and dispatches an action via
					Redux to add the record consisting of name and email to the table.
					*/} 
					<RemoteSubmitButton onClick={() => this.props.addRecordEmailName}/>				
				</td>
			</tbody>
		)
	}

	produceTableRow(record, i) {
		const rowColor = (i % 2 == 0) ? "firstRow" : "secondRow";
		const nameColor = record.nameStatus == 'valid' ? rowColor : "table-warning";
		const emailColor = record.emailStatus == 'valid' ? rowColor : "table-warning";
		const buttonStyle = {
	  		margin: '10px 10px 10px 0'
		};		
		return(
			<tbody>
				<td className={nameColor}>{record.name}</td>
				<td className={emailColor}>{record.email}</td> 
				<td className={rowColor}>  
					<Button
	        			className="customButton"
	       				style={buttonStyle}
	       				onClick={() => {console.log('dispatch called: delete'); 
	       								this.props.deleteRecord(i)} }> 
	        				 Remove 
	        		</Button>
	        	</td>
			</tbody>
		)
	}

	produceWarning() {
		var errorCells = this.props.records.filter((item) => { 
			return (item.nameStatus == 'valid') && (item.emailStatus == 'valid') ? false : true;
		});
		console.log('errorCells ', errorCells)
		if (errorCells.length != 0) {
			return (
				<div ref="warning" className="alert alert-warning" role="alert">
					<strong>Внимание!</strong> В подсвеченных полях содержатся неправильные значения. 
				</div>
			)
		};
	}

	render() {
		return(
			<div>
                {/* Warning */}
                //{this.produceWarning() }
                {/* Table with emails  */}
                <Table>
                    <tbody>
                    	<tbody>
							<td className="header">Name</td>
							<td className="header">Email</td> 
							<td className="header"> </td>
						</tbody>
						{this.produceAddRow()}
							{(typeof this.props.records != 'undefined') &&
							this.props.records.map((item,index) => {
                        		return(this.produceTableRow(item, index))
                        	})
						}
                    </tbody>
                </Table> 
			</div>
		);
	}
}

export default App;

{/* 
onChangeAction={(value, formName)=> {this.props.updateFormFieldValue(value, formName)}*/}