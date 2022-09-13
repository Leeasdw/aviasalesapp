const initialState = {
  price: false,
  time: false,
  optimal: false,
};

const sorterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRICE":
      return {
        price: true,
        time: false,
        optimal: false,
      };
    case "TIME":
      return {
        price: false,
        time: true,
        optimal: false,
      };
    case "OPTIMAL":
      return {
        price: false,
        time: false,
        optimal: true,
      };
    default:
      return state;
  }
};

export default sorterReducer;
