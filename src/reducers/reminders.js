// import { combineReducers } from 'redux';

const reminders = (state = [], action) => {
  if (action.type === 'REMINDER_ADDED') {
    return [
      ...state,
      { ...action.payload }
    ];
  }
  
  return state;
};

export default reminders;

// const newReminder = (state, action) => {
//   const { payload } = action;

//   return {
//       ...state,
//       [payload.id] : {
//            ...payload,
//       }
//   };
// };


// const remindersById = (state = [], action) => {
//   if (action.type === 'REMINDER_ADDED') {
//     return newReminder(state, action);
//   }
  
//   return state;
// };

// const reminderIds = (state = [], action) => {
//   if (action.type === 'REMINDER_ADDED') {
//     return [
//       ...state,
//       action.payload.id
//     ];
//   }
  
//   return state;
// };

// export default combineReducers({
//   byId: remindersById,
//   allIds: reminderIds
// });
