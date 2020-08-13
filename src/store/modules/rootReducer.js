import { combineReducers } from 'redux';

import answersReducer from './answers/reducer';
import questionsReducer from './questions/reducer';

export default combineReducers({
  answersReducer,
  questionsReducer,
});
