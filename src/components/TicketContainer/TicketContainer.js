/* eslint-disable no-nested-ternary */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Bars } from "react-loader-spinner";

import Ticket from "../Ticket/Ticket";
import { showMoreTickets } from "../../actions";

import TicketContainerStyle from "./TicketContainer.module.scss";
import { checkSort } from "./checkSort";
import { checkFilters } from "./checkFIlters";
import { checkAreFiltersOff } from "./checkAreFiltersOff";
import { ErrorUI } from "./errorUI";

function TicketContainer() {
  const renderTicketsCount = useSelector((store) => store.renderCount.renderCount);
  const state = useSelector((store) => store);
  const ticketsAll = useSelector((store) => store.tickets.tickets);
  const sort = useSelector((store) => store.sorter);
  const isLoading = useSelector((store) => store.tickets.isLoading);
  const dispatch = useDispatch();
  const tickets = checkFilters(ticketsAll, state);
  const sortedTickets = sort.price
    ? checkSort(tickets, "PRICE")
    : sort.time
    ? checkSort(tickets, "TIME")
    : sort.optimal
    ? checkSort(tickets, "OPTIMAL")
    : tickets;
  const elements = sortedTickets.slice(0, renderTicketsCount).map((el) => <Ticket key={uuidv4()} ticket={el} />);
  const loaderAnimation = isLoading ? (
    <Bars
      height="80"
      width="80"
      radius="9"
      color="#2196f3"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ alignSelf: "center" }}
    />
  ) : null;
  const areFiltersEnabled = checkAreFiltersOff(state.filter);
  const errorUI = areFiltersEnabled ? null : <ErrorUI />;
  const buttonMore = areFiltersEnabled ? (
    <button type="button" className={TicketContainerStyle.showMore} onClick={() => dispatch(showMoreTickets())}>
      ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ!
    </button>
  ) : null;

  return (
    <div className={TicketContainerStyle.ticket__container}>
      {loaderAnimation}
      {errorUI}
      {elements}
      {buttonMore}
    </div>
  );
}

export default TicketContainer;
