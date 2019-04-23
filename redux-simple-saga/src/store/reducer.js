import * as types from "../actions/ActionTypes";

const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_ASYNC:
      return { ...state, age: state.age + action.value, loading: false };
    case types.DECREMENT:
      return { ...state, age: state.age - action.value };
    case types.LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
