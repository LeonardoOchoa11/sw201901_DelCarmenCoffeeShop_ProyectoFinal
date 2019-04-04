import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
      <h1 style={headerstyle}>{this.props.title}</h1>
        <Link style={linkStyle} to="/">Home</Link> 
        <Link style={linkStyle} to="/about"> About</Link>
        <Link style={linkStyle} to="/login">Login</Link> 
        <Link style={linkStyle} to="/signin">Sign In</Link>
      </div>
    );
  }
}

const headerstyle={
  textAlign: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  fontFamily: 'Pacifico, cursive',
  padding: '20 px',
  paddingBottom: '20px'
}

const linkStyle = {
  textAlign: 'center',
  fontFamily :'Karla, sans-serif',
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center',
  paddingLeft: '50px'
}

export default Header;
