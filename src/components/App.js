import React, {Component} from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import {getUsersFromDb} from '../store';

class App extends Component {
  componentDidMount() {
    this.props.getUsersFromDb();
  }

  render() {
    return (
      <div>
        <h1>Acme Users With Ranks</h1>
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUsersFromDb: () => dispatch(getUsersFromDb()),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
