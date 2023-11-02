import React, { Component } from 'react';
import Header from './components/topheader/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/body';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
  export default App;


