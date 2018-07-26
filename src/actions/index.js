import redditCall from '../services/reddit';
import apiCall from '../services/apiCall';
import { GET_WILD_ELEPHANTS, GET_SANCTUARY_ELEPHANTS, GET_HUMANS } from './types';

export const getWildElephants = () => {
  return async dispatch => {
    const elephants = await redditCall();
    dispatch({
      type: GET_WILD_ELEPHANTS,
      elephants
    });
  }
}

export const getSanctuaryElephants = () => {
  return async dispatch => {
    const elephants = await apiCall('http://localhost:5000/elephants');
    dispatch({
      type: GET_SANCTUARY_ELEPHANTS,
      elephants
    })
  }
}

export const getHumans = () => {
  return async dispatch => {
    const humans = await apiCall('http://localhost:5000/humans');
    dispatch({
      type: GET_HUMANS,
      humans
    })
  }
}