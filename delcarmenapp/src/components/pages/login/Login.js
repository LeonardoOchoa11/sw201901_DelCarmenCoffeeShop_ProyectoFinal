import React, { Component } from 'react';
import Input from '../../../generics/input/Input';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      "txtPswd":"",
      "txtEmail":""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  render() {
    return (
      <div>
      <h1 style={hStyle}>INICIO DE SESION</h1>
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
              inputLabel="Contraseña:"
              inputName="txtPswd"
              inputType="password"
              inputPlaceholder="Contraseña"
              inputValue={this.state.txtPswd}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <br/>
            <button onClick={this.onClickHandler} style={btnStyle} type="submit" className="btn btn-default btn-lg">
              Ingresar
            </button>
      </div>
      <a href="" className="text-white"><Link style={aStyle} to="/signin">¿No tienes cuenta aún? Crea tu Cuenta</Link></a>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos ||destructuring
    this.setState({...this.state, [name]:value});
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();
    //alert("Has Iniciado Sesion");
    axios.post('/api/users/login',
      {...this.state}
    ).then( (resp) => {
      alert(resp);
    }).catch( (err) => {
      alert(err);
    });
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
const aStyle = {
  paddingTop: '20px',
  fontFamily :'Karla, sans-serif',
  color: '#fff'
}
export default Login;
