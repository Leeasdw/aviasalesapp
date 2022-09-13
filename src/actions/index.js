export const setPrice = () => ({
  type: "PRICE",
});

export const setTime = () => ({
  type: "TIME",
});

export const setOptimal = () => ({
  type: "OPTIMAL",
});

export const setAll = () => ({
  type: "ALL",
});

export const setNone = () => ({
  type: "NOTRANSFER",
});

export const setSingle = () => ({
  type: "SINGLETRANSFER",
});

export const setDouble = () => ({
  type: "DOUBLETRANSFER",
});

export const setTriple = () => ({
  type: "TRIPLETRANSFER",
});

export const setTickets = (tickets) => ({
  type: "SETTICKETS",
  payload: tickets,
});

export const showMoreTickets = () => ({
  type: "SHOWMORE",
});

export const setSearchId = (id) => ({
  type: "SETSEARCHID",
  payload: id,
});

export const setLoaderOff = () => ({
  type: "SETLOADEROFF",
});
