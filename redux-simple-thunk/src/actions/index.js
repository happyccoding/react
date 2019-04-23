import * as types from "./ActionTypes";

export const loading = () => {
  return {
    type: types.LOADING
  };
};

export const incrementAsnc = value => ({
  type: types.INCREMENT,
  value
});

export const increment = value => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(incrementAsnc(value));
    }, 5000);
  };
};

export const decrement = value => ({
  type: types.DECREMENT,
  value
});
