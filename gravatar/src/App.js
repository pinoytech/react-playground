import React, { Component } from 'react';
import './App.css';
import md5 from 'md5';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logo: ''
    }
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail(event) {
    this.setState({logo: 'http://www.gravatar.com/avatar/' + md5(event.target.value) + '?s=200'});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.logo} className="App-logo" alt="logo" />
        </div>
        <input
          value={this.state.email}
          onChange={this.handleEmail}
        />
      </div>
    );
  }
}

export default App;
