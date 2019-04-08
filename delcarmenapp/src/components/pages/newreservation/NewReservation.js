import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Input from '../../../generics/input/Input';


class NewReservation extends Component{
  constructor(){
    super();
    this.state = {
      txtDesc:"",
      txtDescError:"",
      txtAutor:"",
      txtAutorError:"",
      txtTipo:"",
      txtTipoError:"",
      redirectTo:"",
      error:""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onChangeHandler(e){
      let {name, value} = e.currentTarget;
      this.setState({[name]:value});
  }
  onBlurHandler(e){
    let { name, value } = e.currentTarget;
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();
    axios.post(
        `api/coffee/new`,
        {
          Descripcion:this.state.txtDesc,
          fchPedido:this.state.txtFch,
          Articulo:this.state.value
        }
      ).then(
        (resp)=>{
          this.setState({ redirectTo:"/products"});
        }
      )
      .catch(
        (err)=>{
          this.setState({error:err});
        }
      );
  }
  render(){
    if(this.state.redirectTo!==""){
      return (
        <div>
          <Link to={this.state.redirectTo}>El pedido ha sido asignado.</Link>
        </div>
      )
    }
    return (
      <div>
        <h1 style={hStyle}>RESERVACION</h1>
        <div style={fStyle} className="card container center-block">
          <Input
              inputLabel        ="Descripción"
              inputName         ="txtDesc"
              inputType         ="text"
              inputPlaceholder  ="Descripción de la Reservación"
              inputValue        ={this.state.txtDesc||null}
              inputErrorMsg     ={this.state.txtDescError||null}
              inputChangeHandler={this.onChangeHandler}
              inputBlurHandler  ={this.onBlurHandler}
          />
          <Input
            inputLabel="Fecha"
            inputName="txtFch"
            inputType="date"
            inputPlaceholder="Fecha de Reservación"
            inputValue={this.state.txtAutor || null}
            inputErrorMsg={this.state.txtAutorError || null}
            inputChangeHandler={this.onChangeHandler}
            inputBlurHandler={this.onBlurHandler}
          />
          <p style={pStyle}>Tipo de Reservación</p>
          <select>
          <option value="volvo">Mesa Pareja</option>
          <option value="saab">Mesa para 6</option>
          <option value="mercedes">Evento</option>
          <option value="audi">Salon de Eventos</option>
          </select>
          <br/><br/>
          <button onClick={this.onClickHandler} style={btnStyle} className="btn btn-default btn-lg">Agregar</button>
          <div>
            {this.state.error}
          </div>
          </div>
      </div>
    );
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
  const pStyle = {
    fontWeight: 'bold'
  }

export default NewReservation;