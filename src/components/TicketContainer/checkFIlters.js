export const checkFilters = (tickets, state) => {
  const finalTickets = [];
  if (state.filter.All) {
    return tickets;
  }
  if (state.filter.NoTransfer) finalTickets.push(...tickets.filter((ticket) => ticket.segments[0].stops.length === 0));
  if (state.filter.SingleTransfer)
    finalTickets.push(...tickets.filter((ticket) => ticket.segments[0].stops.length === 1));
  if (state.filter.DoubleTransfer)
    finalTickets.push(...tickets.filter((ticket) => ticket.segments[0].stops.length === 2));
  if (state.filter.TripleTransfer)
    finalTickets.push(...tickets.filter((ticket) => ticket.segments[0].stops.length === 3));

  return finalTickets;
};
