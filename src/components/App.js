import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
class App extends Component {
  state = {
    fishes: {},
    orders: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const orders = JSON.parse(localStorage.getItem(params.storeID));
    if (orders) {
      this.setState({
        orders
      });
    }
    this.ref = base.syncState(`${params.storeID}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeID,
      JSON.stringify(this.state.orders)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  addToOrder = key => {
    // 1. make a copy of orders
    const orders = { ...this.state.orders };
    // 2. add key of fishes to orders
    orders[key] = orders[key] + 1 || 1;
    // 3. update state with new orders
    this.setState({
      orders
    });
  };

  removeFromOrder = key => {
    // 1. make a copy of orders
    const orders = { ...this.state.orders };
    // 2. delete fishes from orders
    delete orders[key];
    // 3. update state with new orders
    this.setState({
      orders
    });
  };

  updateFish = (key, updatedFish) => {
    // 1. make a copy of fishes data
    const fishes = { ...this.state.fishes };
    // 2. update fishes
    fishes[key] = updatedFish;
    // 3. set updated fishes to state
    this.setState({ fishes });
  };

  removeFish = key => {
    // 1. make a copy of fishes data
    const fishes = { ...this.state.fishes };
    // 2. find fish with given key
    fishes[key] = null;
    // set state with new values
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                fish={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          orders={this.state.orders}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          removeFish={this.removeFish}
          storeID={this.props.match.params.storeID}
        />
      </div>
    );
  }
}

export default App;
