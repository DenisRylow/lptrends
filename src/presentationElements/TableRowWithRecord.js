import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import '../css/App.css';

class TableRowWithRecordInformation extends Component {
  render() {
    const {index, record, onClick} = this.props;
    const rowColor = (index % 2 == 0) ? "firstRow" : "secondRow";
    return (
      <tbody>
        <td className={rowColor}> {record.name} </td> 
        <td className={rowColor}> {record.email} </td> 
        <td className={rowColor}>  
          <Button
          className='customButton'
          onClick={() => {
            console.log('Deleting row with record information'); 
            onClick(index);
          }}> 
            Remove 
          </Button>
        </td>  
      </tbody>
    )
  }
}

export default TableRowWithRecordInformation;