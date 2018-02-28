import React, { Component } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import './App.css';
{/* import ReduxFormWithValidation from './Form';
import SimpleForm from "./SimpleForm";*/}


class App extends Component {	
	produceAddRow() {
		return(
			<tbody>
				<td className="secondRow">
					<Form ref="nameForm">
						<div class="form-group">
							<input type="text" 
							class="form-control" 
							id="inputName" 
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
							placeholder="Enter Email" />
						</div>
					</Form>
				</td>
				<td className="secondRow"> 
					<Button className="customButton"> 
	        				 Add
	        		</Button>
				</td>
			</tbody>
		)
	}

	produceTableRow(record, i) {
		var rowColor = (i % 2 == 0) ? "firstRow" : "secondRow";
		var nameColor = record.nameStatus == 'valid' ? rowColor : "table-warning";
		var emailColor = record.emailStatus == 'valid' ? rowColor : "table-warning";
		var buttonStyle = {
	  		margin: '10px 10px 10px 0'
		};
		return(
			<tbody>
				<td className={nameColor}>{record.name}</td>
				<td className={emailColor}>{record.email}</td> 
				<td className={rowColor}>  
					<Button
	        			className="customButton"
	       				style={buttonStyle}> 
	        				 Remove 
	        		</Button>
	        	</td>
			</tbody>
		)
	}

	render() {
		return (
            <div>
                {/* Warning */}
				<produceWarnning raiseError={this.state.raiseError} /> */}
				<div ref="warning" className="alert alert-warning" role="alert">
					<strong>Внимание!</strong> В подсвеченных полях содержатся неправильные значения. 
				</div>
                {/* Table with emails */}
                {/* <ReduxFormWithValidation onSubmit={this.submit} />
                <div> <SimpleForm onSubmit={function(){}} /> </div> */}
                <Table>
                    <tbody>
                    	<tbody>
							<td className="header">Name</td>
							<td className="header">Email</td> 
							<td className="header"> </td>
						</tbody>
						{produceAddRow()}
						{this.props.records.map((item,index) => {
                        	return(produceTableRow(item, index))
                        })}
                    </tbody>
                </Table> 
			</div>
		)
	}
}

export default App;

/*
function produceWarnning(props) {
    if (props.raiseError) {
    	return (
    		<div className="alert alert-warning" role="alert">
				<strong>Внимание!</strong> В подсвеченных полях содержатся неправильные значения. 
			</div>
		)
    } else {
    	return null;
    }
}

						{this.produceAddRow()}
						{(typeof this.props.records != 'undefined') &&
							this.props.records.map((item,index) => {
                        		return(this.produceTableRow(item, index))
                        	})
						}
*/