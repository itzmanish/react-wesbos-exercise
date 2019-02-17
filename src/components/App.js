import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
class App extends Component {
  state = {
    fishes: {},
    orders: {}
  };
  addFish = fish => {
    // 1. copy existing objects of fishes
    const fishes = { ...this.state.fishes };
    // add new fish to fishes object with timestamp as key
    fishes[`fish${Date.now()}`] = fish;
    // push fishes to state
    this.setState({
      fishes
    });
  };
  loadSampleFishes = () => {
    const fishes = { ...this.state.fishes, ...sampleFishes };
    this.setState({
      fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} fish={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
