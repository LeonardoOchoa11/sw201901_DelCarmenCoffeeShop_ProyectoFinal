import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Details extends Component{
    constructor(){
        super();
        this.state = {
          detail: null,
          isLoading: false,
          hasErrors: false
        }
      }
    componentDidMount(){
        let {coffeeid} = this.props.match.params;
        axios.get(`/api/things/byid/${coffeeid}`)
          .then((resp)=>{
            this.setState({detail: resp.data, isLoading:false, hasErrors:false});
          })
          .catch((err)=>{
            this.setState({detail:null, isLoading:false, hasErrors:err});
          })
      }
    render(){
        let coffeeId = this.props.match.params.coffeeid;
        let coffeeBody = null;
        if(this.state.detail){
        let {Descripcion, fchPedido, Precio} = this.state.detail;
        coffeeBody = (
        <div>
          <h1>{coffeeId}</h1>
          <b>{Descripcion}</b><br />
          <b>{fchPedido}</b><br />
          <b>{Precio}</b><br />
        </div>
      );
    }
    return (
      <div>
        <h1 style={hStyle}>DETALLES</h1>
        {coffeeBody}
        <Link to="/list">Regresar</Link>
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
export default Details;