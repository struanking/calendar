const initialState = new Date();

const activeDate = (state = initialState, action) => {
  if (action.type === 'ACTIVE_MONTH_UPDATED') {
    return action.payload;
  }

  return state;
}

export default activeDate;