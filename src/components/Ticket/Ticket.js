import React from "react";

import TicketStyle from "./Ticket.module.scss";

function Ticket(props) {
  const { ticket } = props;
  if (ticket.segments === undefined) return null;
  const placeFrom = ticket.segments[0];
  const placeTo = ticket.segments[1];

  const getTime = (place) => {
    const originTime = new Date(place.date);
    const originArrivalTime = new Date(originTime.getTime() + place.duration * 60000);
    return (
      <>
        {originTime.getHours().toString().padStart(2, "0")}:{originTime.getMinutes().toString().padStart(2, "0")} –{" "}
        {originArrivalTime.getHours().toString().padStart(2, "0")}:
        {originArrivalTime.getMinutes().toString().padStart(2, "0")}
      </>
    );
  };
  const getTravelTime = (place) => (
    <>
      {Math.floor(place.duration / 60)
        .toString()
        .padStart(2, "0")}
      ч {(place.duration % 60).toString().padStart(2, "0")}
      мин
    </>
  );
  return (
    <div className={TicketStyle.ticket}>
      <div className={TicketStyle.ticket__top}>
        <p className={TicketStyle.ticket__price}>{ticket.price.toLocaleString("ru-RU")} Р</p>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="s7" className={TicketStyle.ticket__img} />
      </div>
      <div className={TicketStyle.ticket__bottom}>
        <div className={TicketStyle.ticket__flightRow}>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>
              {placeFrom.origin} - {placeFrom.destination}
            </p>
            <p className={TicketStyle.info__body}>{getTime(placeFrom)}</p>
          </div>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>В пути</p>
            <p className={TicketStyle.info__body}>{getTravelTime(placeFrom)}</p>
          </div>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>
              {placeFrom.stops.length}{" "}
              {placeFrom.stops.length === 0 ? "пересадок" : placeFrom.stops.length === 1 ? "пересадка" : "пересадки"}
            </p>
            <p className={TicketStyle.info__body}>{placeFrom.stops.join(",")}</p>
          </div>
        </div>
        <div className={TicketStyle.ticket__flightRow}>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>
              {placeTo.origin} - {placeTo.destination}
            </p>
            <p className={TicketStyle.info__body}>{getTime(placeTo)}</p>
          </div>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>В пути</p>
            <p className={TicketStyle.info__body}>{getTravelTime(placeTo)}</p>
          </div>
          <div className={TicketStyle.ticket__flightInfo}>
            <p className={TicketStyle.info__header}>
              {placeTo.stops.length}{" "}
              {placeTo.stops.length === 0 ? "пересадок" : placeTo.stops.length === 1 ? "пересадка" : "пересадки"}
            </p>
            <p className={TicketStyle.info__body}>HKG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
