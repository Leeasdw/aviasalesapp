const initialState = {
  isLoading: true,
  tickets: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETTICKETS":
      return { isLoading: state.isLoading, tickets: [...state.tickets, ...action.payload] };
    case "SETLOADEROFF":
      return {
        isLoading: false,
        tickets: state.tickets,
      };
    default:
      return state;
  }
};

export default ticketReducer;
