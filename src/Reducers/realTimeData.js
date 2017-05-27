export default function realTimeDataReducer(state={}, action) {
  switch(action.type) {
    case 'GET_REAL_DATA':
      return action.payload;
    default:
      return state;
  }
}
