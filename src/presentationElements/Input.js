import React, { Component } from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';

class Input extends Component {
  render() {
    const { formName, placeHolderText, errorFlag, input } = this.props;
    const errorState = (errorFlag == 'valid') ? '' : 'is-invalid';
    return (
      <FormGroup>   
        <FormControl 
        type='text'
        className={errorState}
        placeholder={(typeof placeHolderText != 'undefined') && placeHolderText}
        value={input.value}
        onChange={input.onChange} 
        />
      </FormGroup>
    )
  }
}

export default Input;