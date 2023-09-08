import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions';
import axios from 'axios';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

// eslint-disable-next-line
  const fetchData = async () => {
  
    try {
      const response = await axios.get('http://127.0.0.1:3000/random_greeting');
      dispatch(fetchRandomGreeting(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
