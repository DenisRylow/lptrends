import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import addDeleteRecord from './reducer';

const reducer = combineReducers({
  form: reduxFormReducer,// mounted under "form"
  addDeleteRecord 
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
