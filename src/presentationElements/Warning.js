import React, { Component } from 'react'

class Warning extends Component {
  render() {
    const { errorFlags } = this.props;
    var errorTrigger = false;
    var message = '';
    console.log('Warning component rendering.', errorFlags);
    if (errorFlags['email'] != 'valid') {
      message += ' Неправильный формат электронного адреса.';
      errorTrigger = true;
    };
    if (errorFlags['name'] != 'valid') {
      message += ' Неправильный формат имени. Имя должно начинаться с большой буквы и быть длинной не менее 4 символов.';
      errorTrigger = true;
    };
    console.log('Warning component rendering. Error flag.', errorTrigger);
    if(errorTrigger) {
      return(
        <div ref="warning" className="alert alert-warning" role="alert">
          Ошибка. {message}        
        </div>
      )
    } else {
      return(
        <div>
         
        </div>
      )
    };  
  }
}

export default Warning;
