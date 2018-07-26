import { GET_SANCTUARY_ELEPHANTS } from '../actions/types';

export default (state=[], action) => {
  switch(action.type){
    case GET_SANCTUARY_ELEPHANTS:
      return [...action.elephants];
    default:
      return state;  
  }
}