import React, {Fragment} from 'react';
import {NavLink, Route} from 'react-router-dom';

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
    <Route exact path={'/'} render={()=><p>We have x users!</p>}></Route>
    </Fragment>

  );
};

export default Nav;
