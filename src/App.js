import React, { Component } from 'react';

import './App.css';

class App extends Component {

  handleClick(event) {
    window.alert("There IS NO SPOON!")
  }
  
  
  render() {
    return (
      <div className="App-container">
        <main className="App-main">
          <div className="App-box" onClick={this.handleClick} >
          <div className="App-box-1"></div>
          <div className="App-box-2">

          
          </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
