import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {writeInfo, postUserToDb, updateUserToDb} from '../store';

const UserForm = props => {
  const {users, name, bio, rank, write, post, update, history, match} = props;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const id = match.params.id*1
        match.params.id ? update({id, name, bio, rank}) : post({name, bio, rank});
        history.push('/users');
      }}
    >
      <input
        className="form-control"
        placeholder="name"
        name="WRITE_NAME"
        onChange={event => write(event.target.name, event.target.value)}
        value={name}
      />
      <input
        className="form-control"
        placeholder="bio"
        name="WRITE_BIO"
        onChange={event => write(event.target.name, event.target.value)}
        value={bio}
      />
      <input
        type="number"
        className="form-control"
        placeholder="rank"
        name="WRITE_RANK"
        onChange={event => write(event.target.name, event.target.value)}
        value={rank}
      />
      <div className="btn-group" style={{marginTop: '10px'}}>
        <button className="btn btn-primary" type="submit">
          {match.params.id ? 'Edit' : 'Create'}
        </button>
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
  post: data => dispatch(postUserToDb(data)),
  update: data => dispatch(updateUserToDb(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
