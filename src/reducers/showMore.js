const initialState = {
  renderCount: 4,
};

const showMoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWMORE":
      return {
        renderCount: state.renderCount + 5,
      };

    default:
      return state;
  }
};

export default showMoreReducer;
