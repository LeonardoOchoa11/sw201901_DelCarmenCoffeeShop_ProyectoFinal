import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

//PROPS.NAME CAMBIAR NOMBRE VARIABLE

function ListProduct(props){
    return(
      <div key={props._id}>
        <b>{props.Articulo}</b>
        <b>
        <Link to={`/detail/${props._id}`}>{props.Articulo}</Link>
        </b>
      </div>
    );
  }

class Products extends Component{
    constructor(){
        super();
        this.state = {
          coffee:[],
          isLoading: false,
          error: false,
        }
      }
      componentDidMount(){ 
        this.setState({isLoading:true});
        axios.get('/api/coffee')
          .then( (resp)=>{
            this.setState({coffee:resp.data, isLoading:false});
          })
          .catch( (err)=>{
            alert(err);
          })
        ;
    }
  render(){
    let ListProducts = [];
    if(this.state.coffee.length > 0 ){
     ListProducts = this.state.coffee.map((o, i)=>{
        return (<ListProduct {...o} />);
      });
    }
    return (
      <div className="productlist">
        <h1 style={hStyle}>PRODUCTOS</h1>
        <h2>Inventario de Productos {this.state.coffee.length}</h2>
        <div>
        {ListProducts}
        </div>
        { (this.state.isLoading)? "...Cargando, por favor espere...": null }
        <br/><br/><br/>
        <a href="" className="text-white"><Link style={aStyle} to="/reservation">¿Quieres tener todo preparado? Haz tu reservación</Link></a>
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
const aStyle = {
  paddingTop: '20px',
  fontFamily :'Karla, sans-serif',
  color: '#fff'
}

export default Products;
