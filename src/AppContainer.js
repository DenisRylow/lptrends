import { connect } from 'react-redux';
import { addRecord, deleteRecord } from './actions/actions';
import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './App.css';

class Stub extends React.Component {
	produceAddRow() {
		return(
			<tbody>
				<td className="secondRow">
					<Form ref="nameForm">
						<div class="form-group">
							<input type="text" 
							class="form-control" 
							id="inputName" 
							ref="nameInput"
							placeholder="Enter Name" />
						</div>
					</Form>
				</td>
				<td className="secondRow">
					<Form ref="emailForm">
						<div class="form-group">
							<input type="email" 
							class="form-control" 
							id="inputEmail1"
							ref="emailInput" 
							placeholder="Enter Email" />
						</div>
					</Form>
				</td>
				<td className="secondRow"> 
					<Button 
						className="customButton"
						onClick={() => {
										console.log('dispatch called: add'); 
										console.log(this.refs.nameInput.value, 
	       									this.refs.emailInput.value); 
	       								this.props.addRecord(this.refs.nameInput.value, 
	       									this.refs.emailInput.value)}}> 
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

const mapStateToProps = (state) => {
	const props = { records: state.records };
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
)(Stub);

export default AppContainer;
