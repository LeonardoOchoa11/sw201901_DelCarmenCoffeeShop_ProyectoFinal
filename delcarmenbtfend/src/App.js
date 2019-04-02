import React, { Component } from 'react';

//import de componentes
import Header from './generics/Header';
import Footer from './generics/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="pageheader"  title="Del Carmen Coffee Shop"/>
        <Footer />
      </div>
    );
  }
}

export default App;
