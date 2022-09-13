import TicketStyle from "../Ticket/Ticket.module.scss";

export function ErrorUI() {
  return (
    <div className={TicketStyle.ticket}>
      <div className={TicketStyle.errorText}>
        <img
          className={TicketStyle.errorIMG}
          src="https://shutniks.com/wp-content/uploads/2020/04/smeshnye_png_kartinki_26_09075006.png"
          alt="errImg"
        />
        Рейсов, подходящих под заданные фильтры, не найдено
      </div>
    </div>
  );
}
