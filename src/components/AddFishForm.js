import React, { Component } from 'react';

class AddFishForm extends Component {
  nameInput = React.createRef();
  priceInput = React.createRef();
  statusInput = React.createRef();
  descInput = React.createRef();
  imageInput = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameInput.current.value,
      price: parseFloat(this.priceInput.current.value),
      status: this.statusInput.current.value,
      desc: this.descInput.current.value,
      image: this.imageInput.current.value
    };
    this.props.addFish(fish);
    // clear the form with built in form function
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          ref={this.nameInput}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          ref={this.priceInput}
          type="text"
          name="price"
          placeholder="Price"
        />
        <select ref={this.statusInput} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!!</option>
        </select>
        <textarea ref={this.descInput} name="desc" placeholder="Desc" />
        <input
          ref={this.imageInput}
          type="text"
          name="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
