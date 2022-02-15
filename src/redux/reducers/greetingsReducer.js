import axios from 'axios';
import { GET_GREETING } from '../actions/actionTypes';
import { getGreetings } from '../actions/actionCreators';

export const fetchGreeting = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/v1/greetings', {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch(getGreetings(response.data));
  });
};

const greetingsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
