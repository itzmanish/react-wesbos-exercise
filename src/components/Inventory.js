import React, { Component } from 'react';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import PropTypes from 'prop-types';
import Login from './Login';
import base, { firebaseApp } from '../base';
class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    addFish: PropTypes.func,
    removeFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    updateFish: PropTypes.func
  };

  state = {
    owner: null,
    uid: null
  };

  authHandler = async authData => {
    //1. lookup the current store in firebase database
    const data = await base.fetch(`${this.props.storeID}`, { context: this });
    //2. Claim it if there is no owner
    if (!data.owner) {
      base.post(`${this.props.storeID}/owner`, {
        data: authData.user.uid,
        context: this
      });
    }
    // 3. Set the state of inventory component to reflect current user
    this.setState({
      owner: authData.user.uid,
      uid: data.owner || authData.user.uid
    });
  };

  authenticate = Provider => {
    const authProvider = new firebase.auth[`${Provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log('logging out');

    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const buttonLogout = <button onClick={this.logout}>Logout</button>;
    // 1. Check if user is logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    // 2. Check logged in user and owner of inventory is same
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          {buttonLogout}
          <p>Sorry you are not the owner of this inventory</p>
        </div>
      );
    }

    return (
      <div className="inventory">
        {buttonLogout}
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            removeFish={this.props.removeFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
