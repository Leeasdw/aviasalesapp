import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header";
import Filter from "../Filter/Filter";
import Menu from "../Menu";
import TicketContainer from "../TicketContainer";
import { fetchId, fetchTickets } from "../../asyncActions";

function AviaSalesApp() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.searchId.id);
  useEffect(() => {
    dispatch(fetchId());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTickets(id));
  }, [id]);

  return (
    <div className="aviasales__app">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Filter />
          <div className="content">
            <Menu />
            <TicketContainer />
          </div>
        </main>
      </div>
    </div>
  );
}

export default AviaSalesApp;
