import { combineReducers } from 'redux';
import humans from './humans';
import wildElephants from './wildElephants';
import sanctuaryElephants from './sanctuaryElephants';

export default combineReducers({
  humans,
  wildElephants,
  sanctuaryElephants
})