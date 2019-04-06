import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-inverse">
        <a href="" className="text-white"><Link style={linkStyle} to="/">Home</Link></a>
        <a href="" className="text-white"><Link style={linkStyle} to="/about">About</Link></a>
        <a href="" className="text-white"><Link style={linkStyle} to="/login">Login</Link></a>
        <a href="" className="text-white"><Link style={linkStyle} to="/signin">Sign In</Link></a>
        <a href="" className="text-white"><Link style={linkStyle} to="/products">Products</Link></a>
      </nav>
      <h1 style={headerstyle}>{this.props.title}</h1>
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
}

export default Header;
