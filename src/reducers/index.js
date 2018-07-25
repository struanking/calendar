import { combineReducers } from 'redux';
import activeDate from './activeDate';
import reminders from './reminders';

export default combineReducers({
  activeDate,
  reminders
})