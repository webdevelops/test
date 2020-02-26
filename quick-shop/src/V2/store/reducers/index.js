import { combineReducers } from 'redux';

import auth from './auth';
import phones from './phones';

export default combineReducers({
  auth,
  phones
});