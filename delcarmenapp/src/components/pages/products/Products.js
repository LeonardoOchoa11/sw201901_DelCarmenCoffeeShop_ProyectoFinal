import React, {Component} from 'react';
import axios from 'axios';

//PROPS.NAME CAMBIAR NOMBRE VARIABLE

function ListProduct(props){
    return(
      <div key={props._id}>
        <b>{props.name}</b> 
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
        <h2>Objeto Doc {this.state.coffee.length}</h2>
        <div>
        {ListProducts}
        </div>
        { (this.state.isLoading)? "...Cargando": null }
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
export default Products;