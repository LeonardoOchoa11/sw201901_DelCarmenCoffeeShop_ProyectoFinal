import React, {Component} from 'react';


class Signin extends Component{
  render(){
    return (
      <div>
        <h1 style={hStyle}>CREA TU CUENTA</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem odio animi! Laboriosam commodi, minus quia itaque non praesentium eum nulla expedita, facilis eligendi reiciendis necessitatibus accusamus asperiores libero voluptates?</p>
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
export default Signin;