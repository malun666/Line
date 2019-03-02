import { createStore, combineReducers, applyMiddleware } from 'redux';

import { ActionTypes } from './ActionTypes';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

function UserReducer(state = [], action) {
  switch(action.type) {
    case ActionTypes.AddUser :
      return [...state, action.payload];
    case ActionTypes.UserLoaded : 
      return action.payload;
    default:
      return state;
  }
}

function StudentReducer(state = {}, action) {
  return state;
}

let allReducers = combineReducers({
  User: UserReducer,
  Student: StudentReducer
})

// createStore(, ,)
const store = createStore(allReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export default store;