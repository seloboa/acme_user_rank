import React, {Component} from 'react';
import Nav from './Nav';
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount(){

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

})

export default App;
