import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
      <p style={footerstyle}> Seminario de Software 2019 01 | David Maldonado | Franco Fuentes | Gabriel Mora | Leonardo Ochoa | Jeancarlos Lainez. </p>
      </div>
    );
  }
}

const footerstyle={
    position: 'fixed',
    bottom: '0',
    marginBottom: '0',
    width: '100%',
    height: '50px',
    textAlign: 'center',
    fontFamily :'Karla, sans-serif',
    background: 'rgba(0,0,0,0.7)'
}

export default Footer;

