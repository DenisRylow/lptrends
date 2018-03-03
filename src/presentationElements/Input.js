import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';

class Input extends Component {
  render() {
    const { formName, onChangeAction, placeHolderText, errorFlag } = this.props;
    const errorState = (errorFlag == 'valid') ? '' : 'is-invalid';
    return (
      <FormGroup>   
        <FormControl 
        type='text'
        className={errorState}
        placeholder={(typeof placeHolderText != 'undefined') && placeHolderText}
        onChange={(e) => {
        	console.log('Form ', formName, ' updates with value ', e.target.value,
            ' ,errorState is ', errorState, ' ,and error flag is ', errorFlag);
        	onChangeAction(e.target.value, formName);
        }}/>
      </FormGroup>
    )
  }
}

export default Input;