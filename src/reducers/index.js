import { combineReducers } from "redux";

import sorterReducer from "./sorter";
import filterReducer from "./filter";
import ticketReducer from "./getTickets";
import showMoreReducer from "./showMore";
import idReducer from "./getSearchId";

export const reducers = combineReducers({
  sorter: sorterReducer,
  tickets: ticketReducer,
  filter: filterReducer,
  renderCount: showMoreReducer,
  searchId: idReducer,
});
