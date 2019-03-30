import React from 'react';
import {connect} from 'react-redux';

const Home = props => {
  return <p>We have {props.users.length} users!</p>;
};

const mapStateToProps = state => ({users: state.users});

export default connect(mapStateToProps)(Home);
