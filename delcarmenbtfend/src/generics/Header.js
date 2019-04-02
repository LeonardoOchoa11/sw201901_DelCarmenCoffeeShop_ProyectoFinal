import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      <h1 style={headerstyle}>{this.props.title}</h1>
      </div>
    );
  }
}

const headerstyle={
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold'
}

export default Header;
