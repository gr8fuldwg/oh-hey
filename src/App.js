import React, { Component } from 'react';

import './App.css';

class App extends Component {

  handleClickOne(event) {
    window.alert("Wise choice.....you have selected the red pill. Let us take a step into the reality that not all are privy to. Perhaps you should kiss your concept of what is and what isn't goodbye for your realm is on the brink of eternal change. Are you ready................................................................................................?")
  }

  handleClickTwo(event) {
    window.alert("There is no reality.........")
  }
  
  
  render() {
    return (
      <div className="App-container">
        <main className="App-main">
          <div className="App-box"  >
          <div className="App-box-1" onClick={this.handleClickOne}></div>
          <div className="App-box-2" onClick={this.handleClickTwo}>

          
          </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
