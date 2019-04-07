import React, {Component} from 'react';
import Input from '../../../generics/input/Input';

class Signin extends Component{
  constructor(){
    super();
    this.state = {
      "txtEmail":"",
      "txtName":"",
      "txtPswd":"",
      "txtPswdConfirm":"",
    }
    
    this.onChangeHandler = this.onChangeHandler.bind(this);

  }
  render() {
    return (
      <div>
      <h1 style={hStyle}>CREA TU CUENTA</h1>
      <div style={fStyle} className="card container center-block">
            <Input className="border p-3 formform-control"
              inputLabel="Correo Electrónico: "
              inputName="txtEmail"
              inputType="email"
              inputPlaceholder="Correo Electrónico"
              inputValue={this.state.txtEmail}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <Input className="form-control"
              inputLabel="Nombre de Usuario:"
              inputName="txtName"
              inputType="text"
              inputPlaceholder="Nombre de Usuario"
              inputValue={this.state.txtName}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <Input className="form-control"
              inputLabel="Contraseña:"
              inputName="txtPswd"
              inputType="password"
              inputPlaceholder="Contraseña"
              inputValue={this.state.txtPswd}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <Input className="form-control"
              inputLabel="Confirmar contraseña:"
              inputName="txtPswdConfirm"
              inputType="password"
              inputPlaceholder="Contraseña"
              inputValue={this.state.txtPswdConfirm}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <br/>
            <button onClick={this.onClickHandler} style={btnStyle} type="submit" className="btn btn-default btn-lg">
              Registrarse
            </button>
      </div>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos ||destructuring
    this.setState({...this.state, [name]:value});
  }
}



const hStyle = {
  color: '#fff',
  textAlign: 'center',
  paddingTop: '20px',
  fontWeight: 'bold',
  fontSize: '27px'
}

const fStyle = {
  color: '#000',
  textAlign: 'center',
  paddingTop: '15px',
  paddingBottom: '15px',
  fontSize: '16px',
  backgroung: '#4F311D'
}
const btnStyle = {
  backgroungColor: '#4F311D',
  fontSize: '14px',
}

export default Signin;