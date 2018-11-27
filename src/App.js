import React, { Component } from 'react';
import './App.css';
import currencies from './currencies.js';

class App extends Component {

  state = {
    selectPairs: []
  }

  handleCheckbox = currency => event =>{
    const {checked} = event.target;

    this.setState(({ selectPairs }) => {
      return {
        selectedPairs: [BTC_USD]
      }
    })
  };

  render() {
    return (
      <div className="App">
        <aside>
          <ul className="currList">
            {currencies.map(curr => (
            <li key={curr} className="currItem">
            <input type="checkbox" id={curr} onChange={this.handleCheckbox} />
            <label htmlFor={curr}>
              {curr}
            </label>
            </li>
          ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default App;
