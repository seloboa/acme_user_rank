import React from 'react';
import {Link} from 'react-router-dom';

const UserForm = () => {
  return (
    <form>
      <input className="form-control" placeholder="name" name="name" />
      <input className="form-control" placeholder="bio" name="bio" />
      <input className="form-control" placeholder="rank" name="rank" />
      <div className="btn-group" style={{marginTop: '10px'}}>
        <button className="btn btn-primary">Create</button>
        <Link to="/users">
          <button className="btn btn-info">Cancel</button>
        </Link>
      </div>
    </form>
  );
};

export default UserForm;
