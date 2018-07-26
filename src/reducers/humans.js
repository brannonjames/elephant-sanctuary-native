import { GET_HUMANS} from '../actions/types';

export default (state=[], action) => {
  switch(action.type){
    case GET_HUMANS:
      return [...action.humans];
    default:
      return state;  
  }
}