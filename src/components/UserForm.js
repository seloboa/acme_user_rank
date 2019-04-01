import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {writeInfo} from '../store';

const UserForm = props => {
  const {users, name, bio, rank, write} = props;
  return (
    <form>
      <input
        className="form-control"
        placeholder="name"
        name="WRITE_NAME"
        onChange={event => write(event.target.name, event.target.value)}
        value={name}
      />
      <input className="form-control" placeholder="bio" name="WRITE_BIO" />
      <input className="form-control" placeholder="rank" name="WRITE_RANK" />
      <div className="btn-group" style={{marginTop: '10px'}}>
        <button className="btn btn-primary">Create</button>
        <Link to="/users">
          <button className="btn btn-info">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  name: state.name,
  bio: state.bio,
  rank: state.rank,
});

const mapDispatchToProps = dispatch => ({
  write: (field, data) => dispatch(writeInfo(field, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
