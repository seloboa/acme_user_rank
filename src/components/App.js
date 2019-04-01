import React, {Component} from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import {getUsersFromDb} from '../store';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Acme Users With Ranks</h1>
        <Nav />
      </div>
    );
  }
}

export default App;
