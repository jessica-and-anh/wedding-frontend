import React, { Component } from 'react';
import HeaderNav from './nav';
import '../../stylesheets/containers/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
      </div>
    );
  }
}

export default App;
