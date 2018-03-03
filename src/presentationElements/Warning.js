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
{/*<strong>Внимание!</strong> В подсвеченных красным полях содержатся неправильные значения. 
    const { errorFlags } = this.props;
    var errorTrigger = false;
    var message = '';
    if (errorFlags['email'] != 'valid') {
      message += ' Неправильный формат электронного адреса.';
      errorTrigger = true;
    };
    if (errorFlags['name'] != 'valid') {
      message += ' Неправильный формат имени. Имя должно начинаться с большой буквы и быть длинной не менее 4 символов.';
      errorTrigger = true;
    };

  constructor(props) {
    super(props);
    this.errorFlags = props.errorFlags;
    this.errorTrigger = false;
    this.message = 'Ошибка при вводе данных.';
    if (this.errorFlags['email'] != 'valid') {
      this.message += ' Неправильный формат электронного адреса.';
      this.errorTrigger = true;
    };
    if (this.errorFlags['name'] != 'valid') {
      this.message += ' Неправильный формат имени. Имя должно начинаться с большой буквы и быть длинной не менее 4 символов.';
      this.errorTrigger = true;
    };
    console.log('Warning header created. Trigger is ', this.errorTrigger, ', props:', props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Warning component checks for updates.', nextProps.errorFlags != this.errorFlags);
    return nextProps.errorFlags != this.errorFlags;  
  }

  */}