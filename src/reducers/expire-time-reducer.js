import { ActionTypes } from '../actions';

const ExpireTimeReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXPIRE_TIME:
      return state;
    case ActionTypes.ERROR_EXPIRE_TIME:
      return '0';
    default:
      return state;
  }
};

export default ExpireTimeReducer;
