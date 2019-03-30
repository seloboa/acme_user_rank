import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  users: [],
};

//action constant
const GET_USERS = 'GET_USERS';

//action creators
const getUsers = () => ({
  type: GET_USERS,
  users,
});

//thunk
export const getUsersFromDb = async dispatch => {
  const response = await axios.get('/api/users');
  const users = response.data;
  dispatch(getUsers(users));
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.users};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
