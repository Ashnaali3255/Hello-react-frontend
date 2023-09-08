// src/reducers/index.js
import { combineReducers } from 'redux';

const greeting = (action, state = '') => {
  switch (action.type) {
    case 'FETCH_RANDOM_GREETING_SUCCESS':
      return action.greeting;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting,
});

export default rootReducer;
