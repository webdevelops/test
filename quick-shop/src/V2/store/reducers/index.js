import { combineReducers } from 'redux';

import auth from './auth';
import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';

export default combineReducers({
  auth,
  phones,
  phonesPage,
  phonePage,
});