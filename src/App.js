import { addRecord, deleteRecord } from './actions/actions';
import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './App.css';
import ReduxFormContainer from './Form';
import { formValueSelector } from 'redux-form';

class App extends React.Component {
	produceAddRow() {
		return(
			<tbody>
				<td className="secondRow">
					<ReduxFormContainer name="name" />
				</td>
				<td className="secondRow">
					<ReduxFormContainer name="email" />
				</td>
				<td className="secondRow"> 
					<Button 
						className="customButton"
						onClick={() => {
							const selectorName = formValueSelector('name');
							const selectorEmail = formValueSelector('email');
							

	
							console.log(this.props, this.props.name)}}> 
	        				 Add
	        		</Button>
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
                {this.produceWarning() }
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