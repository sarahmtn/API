const initialState = {
  data: [],
  dataArray: [],
};

const newsReducer = (state = initialState, action) => {
  if (action.type === "SET_DATA") {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
};

export default newsReducer;
