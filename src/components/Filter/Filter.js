/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../actions";

import FilterStyle from "./Filter.module.scss";

function Filter() {
  const store = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!store.All && store.NoTransfer && store.SingleTransfer && store.DoubleTransfer && store.TripleTransfer)
      dispatch(Actions.setAll());
  });

  return (
    <aside className="filter">
      <h5 className="filter__header">Количество пересадок</h5>
      <div className={FilterStyle.filter__element}>
        <label className="check">
          <input
            type="checkbox"
            className={FilterStyle.check__input}
            checked={store.All}
            onChange={() => {
              dispatch(Actions.setAll());
            }}
          />
          <span className={FilterStyle.check__box} />
          Все
        </label>
      </div>
      <div className={FilterStyle.filter__element}>
        <label className="check">
          <input
            type="checkbox"
            className={FilterStyle.check__input}
            checked={store.NoTransfer}
            onChange={() => {
              dispatch(Actions.setNone());
            }}
          />
          <span className={FilterStyle.check__box} />
          Без пересадок
        </label>
      </div>
      <div className={FilterStyle.filter__element}>
        <label className="check">
          <input
            type="checkbox"
            className={FilterStyle.check__input}
            checked={store.SingleTransfer}
            onChange={() => {
              dispatch(Actions.setSingle());
            }}
          />
          <span className={FilterStyle.check__box} />1 пересадка
        </label>
      </div>
      <div className={FilterStyle.filter__element}>
        <label className="check">
          <input
            type="checkbox"
            className={FilterStyle.check__input}
            checked={store.DoubleTransfer}
            onChange={() => {
              dispatch(Actions.setDouble());
            }}
          />
          <span className={FilterStyle.check__box} />2 пересадки
        </label>
      </div>
      <div className={FilterStyle.filter__element}>
        <label className="check">
          <input
            type="checkbox"
            className={FilterStyle.check__input}
            onChange={() => {
              dispatch(Actions.setTriple());
            }}
            checked={store.TripleTransfer}
          />
          <span className={FilterStyle.check__box} />3 пересадки
        </label>
      </div>
    </aside>
  );
}

export default Filter;
