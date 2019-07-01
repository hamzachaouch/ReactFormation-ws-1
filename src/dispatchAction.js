export const dispatchAction = (type, data) => dispatch => {
  return dispatch({
    type: type,
    payload: data
  });
};
