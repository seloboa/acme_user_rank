import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {writeInfo} from '../store';

const Users = props => {
  return (
    <ul className="list-group">
      {props.users.map(user => (
        <li className="list-group-item" key={user.id}>
          {user.name}
          <br />
          {user.bio}
          <br />
          <span className="badge badge-success" style={{marginBottom: '10px'}}>
            Ranked {user.rank}
          </span>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button className="btn btn-warning">Delete</button>
            <NavLink
              to={`/users/edit/${user.id}`}
              onClick={e => {
                e.preventDefault();
                props.write('WRITE_NAME', user.name);
                props.write('WRITE_BIO', user.bio);
                props.write('WRITE_RANK', user.rank);
                props.history.push(`/users/edit/${user.id}`);
              }}
            >
              Edit
            </NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  write: (field, data) => dispatch(writeInfo(field, data)),
});

export default connect(
  null,
  mapDispatchToProps
)(Users);
