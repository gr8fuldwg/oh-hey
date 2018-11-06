import React, { Component } from 'react';

import './App.css';

class App extends Component {

  handleClick(event) {
    window.alert("You Don't Know ME!")
  }
  
  
  render() {
    return (
      <div className="App-container">
        <main className="App-main">
          <div className="App-box" onClick={this.handleClick} ></div>
        </main>
      </div>
    );
  }
}

export default App;
