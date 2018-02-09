import React, { Component } from 'react';
import rat_sun from './rat_sun.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={rat_sun} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ROUS</h1>
        </header>
        <p className="App-intro">
         
        </p>
        <div className="App-body">
            <form>
                <button name="led_on">Turn LED ON</button>
                <button name="led_off">Turn LED OFF</button>
            </form>
        </div>
      </div>
    );
  }
}

export default App;
