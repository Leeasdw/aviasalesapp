import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setTime, setPrice, setOptimal } from "../../actions";

import MenuStyle from "./Menu.module.scss";

function Menu() {
  const state = useSelector((store) => store.sorter);
  const dispatch = useDispatch();
  return (
    <nav className={MenuStyle.menu}>
      <button
        type="button"
        className={state.price ? `${MenuStyle.menu__button} ${MenuStyle.button__active}` : `${MenuStyle.menu__button}`}
        onClick={() => dispatch(setPrice())}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={state.time ? `${MenuStyle.menu__button} ${MenuStyle.button__active}` : `${MenuStyle.menu__button}`}
        onClick={() => dispatch(setTime())}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={
          state.optimal ? `${MenuStyle.menu__button} ${MenuStyle.button__active}` : `${MenuStyle.menu__button}`
        }
        onClick={() => dispatch(setOptimal())}
      >
        Оптимальный
      </button>
    </nav>
  );
}

export default Menu;
