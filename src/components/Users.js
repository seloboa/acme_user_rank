import React from 'react';
import {NavLink} from 'react-router-dom';

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
            <NavLink to={`/users/edit/${user.id}`}>Edit</NavLink>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
