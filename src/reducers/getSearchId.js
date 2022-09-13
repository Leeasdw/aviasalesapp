const initialState = {
  id: "start",
};

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETSEARCHID":
      return {
        id: action.payload,
      };

    default:
      return state;
  }
};

export default idReducer;
