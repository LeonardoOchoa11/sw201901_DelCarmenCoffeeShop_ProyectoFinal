import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';


//import de componentes
import Header from './generics/Header';
import Footer from './generics/Footer';
import Login from './components/pages/login/Login';
import SignIn from './components/pages/signin/SignIn';
import Products from './components/pages/products/Products';
import About from './components/pages/About';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header className="pageheader"  title="Del Carmen Coffee Shop"/>
        <Footer />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />
        <Route path="/products" component={Products} />
      </div>
      </Router> 
    );
  }
}

export default App;
