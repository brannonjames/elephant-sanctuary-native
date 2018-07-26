import { GET_WILD_ELEPHANTS } from '../actions/types';

export default (state=[], action) => {
  switch(action.type){
    case GET_WILD_ELEPHANTS:
      return [...action.elephants];
    default:
      return state;  
  }
}