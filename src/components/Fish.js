import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Fish extends Component {
  static propTypes = {
    index: PropTypes.string,
    addToOrder: PropTypes.func,
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string
    })
  };

  render() {
    const { name, price, desc, status, image } = this.props.fish;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={image} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailable ? 'Add to cart' : 'Sold out!!!'}
        </button>
      </li>
    );
  }
}

export default Fish;
