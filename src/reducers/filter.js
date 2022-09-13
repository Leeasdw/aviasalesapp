const initialState = {
  All: true,
  NoTransfer: true,
  SingleTransfer: true,
  DoubleTransfer: true,
  TripleTransfer: true,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL":
      if (state.All)
        return {
          All: false,
          NoTransfer: false,
          SingleTransfer: false,
          DoubleTransfer: false,
          TripleTransfer: false,
        };
      return {
        All: true,
        NoTransfer: true,
        SingleTransfer: true,
        DoubleTransfer: true,
        TripleTransfer: true,
      };
    case "NOTRANSFER":
      if (state.All) return { ...state, NoTransfer: !state.NoTransfer, All: false };
      return { ...state, NoTransfer: !state.NoTransfer };
    case "SINGLETRANSFER":
      if (state.All) {
        return {
          ...state,
          SingleTransfer: !state.SingleTransfer,
          All: false,
        };
      }
      return { ...state, SingleTransfer: !state.SingleTransfer };
    case "DOUBLETRANSFER":
      if (state.All) return { ...state, DoubleTransfer: !state.DoubleTransfer, All: false };
      return { ...state, DoubleTransfer: !state.DoubleTransfer };
    case "TRIPLETRANSFER":
      if (state.All) return { ...state, TripleTransfer: !state.TripleTransfer, All: false };
      return { ...state, TripleTransfer: !state.TripleTransfer };
    default:
      return state;
  }
};

export default filterReducer;
