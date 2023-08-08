const initialState = {
  data: [],
  query: "tesla",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
