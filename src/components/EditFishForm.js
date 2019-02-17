import React, { Component } from 'react';

class EditFishForm extends Component {
  handleUpdate = e => {
    const updatedfish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    // call function for updateFish
    this.props.updateFish(this.props.index, updatedfish);
  };

  render() {
    return (
      <form className="fish-edit">
        <input
          value={this.props.fish.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleUpdate}
        />
        <input
          value={this.props.fish.price}
          type="text"
          name="price"
          placeholder="Price"
          onChange={this.handleUpdate}
        />
        <select
          value={this.props.fish.status}
          name="status"
          onChange={this.handleUpdate}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!!</option>
        </select>
        <textarea
          value={this.props.fish.desc}
          name="desc"
          placeholder="Desc"
          onChange={this.handleUpdate}
        />
        <input
          value={this.props.fish.image}
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
