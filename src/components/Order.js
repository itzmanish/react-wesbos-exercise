import React, { Component } from 'react';
import { formatPrice } from '../helpers';
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

class Order extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];
    const isAvailable = fish && fish.status === 'available';
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer available.
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderId = Object.keys(this.props.orders);
    const total = orderId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + fish.price * count;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Orders</h2>
        <ul className="order">{orderId.map(key => this.renderOrder(key))}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
