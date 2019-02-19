import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <nav className="login">
        <h1>Inventory Login</h1>
        <p>Sign in to manage your store Inventory</p>
        <button
          className="github"
          onClick={() => this.props.authenticate('Github')}
        >
          Sign In with Github
        </button>
        <button
          className="twitter"
          onClick={() => this.props.authenticate('Twitter')}
        >
          Sign In with Twitter
        </button>
      </nav>
    );
  }
}

export default Login;
