// keys for actiontypes
export const ActionTypes = {
  SET_EXPIRE_TIME: 'SET_EXPIRE_TIME',
  ERROR_EXPIRE_TIME: 'ERROR_EXPIRE_TIME',
};

export function setExpireTime(expireTime) {
  if (expireTime == null) {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'));
    } catch (error) {
      expiryTime = '0';
    }
    return {
      type: ActionTypes.SET_EXPIRE_TIME,
      payload: expiryTime,
    };
  } else {
    return {
      type: ActionTypes.SET_EXPIRE_TIME,
      payload: expireTime,
    };
  }
}

export function errorExpireTime() {
  return {
    type: ActionTypes.SET_EXPIRE_TIME,
    payload: '0',
  };
}
