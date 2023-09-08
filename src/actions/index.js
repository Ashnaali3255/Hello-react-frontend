// src/actions/index.js
import axios from 'axios';

export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';

const fetchRandomGreetingSuccess = (greeting) => ({
  type: FETCH_RANDOM_GREETING_SUCCESS,
  greeting,
});

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/random_greeting');
      dispatch(fetchRandomGreetingSuccess(response.data.message));
    } catch (error) {
      console.error('Error fetching random greeting', error);
    }
  };
};
