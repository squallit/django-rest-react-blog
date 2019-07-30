import { combineReducers } from 'redux';
import authReducer from './authReducers';
import articlesReducer from './articleReducers';



const rootReducer = combineReducers({
  auth: authReducer,
  articles: articlesReducer
});

export default rootReducer;
