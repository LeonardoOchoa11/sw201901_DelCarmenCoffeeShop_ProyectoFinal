import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";



//import de componentes
import Header from './generics/Header';
import Footer from './generics/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header className="pageheader"  title="Del Carmen Coffee Shop"/>
        <Footer />
      </div>
      </BrowserRouter> 
    );
  }
}

export default App;
