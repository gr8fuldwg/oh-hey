import React, { Component } from 'react';

import './App.css';



class App extends Component {

  handleClickOne(event) {
    window.alert("Wise choice.....you have selected the red pill. Let us take a step into the reality that not all are privy to. Perhaps you should kiss your concept of what-is, and, what-isn't, goodbye. For your realm is on the brink of eternal change, and the fibers of what you consider 'reality' are about to unthread beyond recognition. There is no unringing this bell. Are you ready................................................................................................?")
  }

  handleClickTwo(event) {
    window.alert("Unicorns and Rainbows")
  };
   
 
  render() {
    return (
      <div className="App-container">
        <main className="App-main">
          <div className="App-box"  >
          <div className="App-box-1" onClick={this.handleClickOne}><a href="https://www.youtube.com/embed/oi6mPsdhy-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><button className="btn"></button></a></div>
          <div className="App-box-2" onClick={this.handleClickTwo}>

          
          </div>
          </div>
        </main>
      </div>
    );
  }
}


 

export default App;
