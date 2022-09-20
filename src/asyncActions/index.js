import { setTickets, setSearchId, setLoaderOff } from "../actions";

export const fetchId = () => (dispatch) => {
  try {
    return fetch("https://front-test.dev.aviasales.ru/search")
      .then((res) => res.json())
      .then((id) => {
        dispatch(setSearchId(id));
      });
  } catch (e) {
    console.log(e);
  }
};

export const fetchTickets = (id) => (dispatch) => {
  const subscribe = async () => {
    if (id.searchId !== undefined) {
      try {
        const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id.searchId}`);
        if (!response.ok) {
          await subscribe();
        } else if (response.status !== 200) {
          // eslint-disable-next-line no-promise-executor-return
          await new Promise((resolve) => setTimeout(resolve, 1000));
          await subscribe();
        } else {
          const responseJSON = await response.json();
          dispatch(setTickets(responseJSON.tickets));
          if (!responseJSON.stop) await subscribe();
          if (responseJSON.stop) dispatch(setLoaderOff());
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  subscribe(id);
};
