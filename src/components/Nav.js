import React, {Fragment} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Users from './Users';
import UserForm from './UserForm';
import Home from './Home';
import {connect} from 'react-redux';

const Nav = props => {
  const topRankedUsers = props.users.reduce((acc, cur) => {
    if (acc.length <= 0 || cur.rank <= acc[0].rank) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return (
    <Fragment>
      <ul className="nav nav-tabs" style={{marginBottom: '10px'}}>
        <li className="nav-item">
          <NavLink exact to={'/'} className={'nav-link'}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={'/users'} className={'nav-link'}>
            Users ({props.users.length})
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/users/create'} className={'nav-link'}>
            Create A User
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/users/topRanked'} className={'nav-link'}>
            Top Ranked (
            {topRankedUsers.map((user, i) =>
              i === topRankedUsers.length - 1 ? `${user.name}` : `${user.name} `
            )}
            )
          </NavLink>
        </li>
      </ul>
      <Route exact path={'/'} component={Home} />
      <Route
        exact
        path={'/users'}
        render={({history}) => <Users users={props.users} history={history} />}
      />
      <Route path={'/users/edit/:id'} component={UserForm} />
      <Route path={'/users/create'} component={UserForm} />
      <Route
        path={'/users/topRanked'}
        render={({history}) => (
          <Users users={topRankedUsers} history={history} />
        )}
      />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Nav);
