import React, {Fragment} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Users from './Users';
import UserForm from './UserForm'

const Nav = () => {
  return (
    <Fragment>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink exact to={'/'} className={'nav-link'}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={'/users'} className={'nav-link'}>
            Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/users/create'} className={'nav-link'}>
            Create A User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/users/topRanked'} className={'nav-link'}>
            Top Ranked
          </NavLink>
        </li>
      </ul>
      <Route exact path={'/'} render={() => <p>We have x users!</p>} />
      <Route exact path={'/users'} component={Users} />
      <Route path ={'/users/create'} component={UserForm}></Route>
    </Fragment>
  );
};

export default Nav;
