import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  users: [],
  name: '',
  bio: '',
  rank: 0,
};

//action constant
const GET_USERS = 'GET_USERS';
const WRITE_NAME = 'WRITE_NAME';
const WRITE_BIO = 'WRITE_BIO';
const WRITE_RANK = 'WRITE_RANK';

//action creators
const getUsers = users => ({
  type: GET_USERS,
  users,
});

export const writeInfo = (field, data) => ({
  type: field,
  data,
});

//thunk
export const getUsersFromDb = () => {
  return async dispatch => {
    const response = await axios.get('/api/users');
    const users = response.data;
    dispatch(getUsers(users));
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.users};
    case WRITE_NAME:
      return {...state, name: action.data};
    case WRITE_BIO:
      return {...state, bio: action.data};
    case WRITE_RANK:
      return {...state, rank: action.data};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
