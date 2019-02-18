import React, { Component } from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.handleSubmit}>
        <h2> Please enter a store </h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Enter store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
