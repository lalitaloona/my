import { combineReducers } from 'redux';

import user from './user';
import clinicDetails from './clinicDetails';

export default combineReducers({
  user,
  clinicDetails,
});
