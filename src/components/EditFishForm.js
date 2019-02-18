import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string
    }),
    index: PropTypes.string,
    removeFish: PropTypes.func,
    updateFish: PropTypes.func
  };
  handleUpdate = e => {
    const updatedfish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    // call function for updateFish
    this.props.updateFish(this.props.index, updatedfish);
  };

  render() {
    const { name, price, status, image, desc } = this.props.fish;
    return (
      <form className="fish-edit">
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleUpdate}
        />
        <input
          value={price}
          type="text"
          name="price"
          placeholder="Price"
          onChange={this.handleUpdate}
        />
        <select value={status} name="status" onChange={this.handleUpdate}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!!</option>
        </select>
        <textarea
          value={desc}
          name="desc"
          placeholder="Desc"
          onChange={this.handleUpdate}
        />
        <input
          value={image}
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.handleUpdate}
        />
        <button onClick={() => this.props.removeFish(this.props.index)}>
          - Remove Fish
        </button>
      </form>
    );
  }
}

export default EditFishForm;
