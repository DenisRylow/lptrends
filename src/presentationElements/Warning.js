import React, { Component } from 'react'

class Warning extends Component {
  constructor(props) {
    super(props);
    this.props.errorFlags = props.errorFlags;
    this.props.errorTrigger = false;
    this.props.message = 'Ошибка при вводе данных.';
    if (this.props.errorFlags['email'] != 'valid') {
      this.props.message += ' Неправильный формат электронного адреса.';
      this.props.errorTrigger = true;
    };
    if (this.props.errorFlags['name'] != 'valid') {
      this.props.message += ' Неправильный формат имени. Имя должно начинаться с большой буквы и быть длинной не менее 4 символов.';
      this.props.errorTrigger = true;
    };
    console.log('Warning header created. Trigger is ', this.props.errorTrigger);
  }
  render() {
    if(this.props.errorTrigger) {
      return(
        <div ref="warning" className="alert alert-warning" role="alert">
          {this.props.message}
        </div>
      )
    } else {
      return(
        <div>
         
        </div>
      )
    }        
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

  */}