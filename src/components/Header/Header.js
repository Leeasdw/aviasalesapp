import React from "react";

import Logo from "../../img/Logo.svg";

import HeaderStyle from "./Header.module.scss";

function Header() {
  return (
    <div className={HeaderStyle.header}>
      <img src={Logo} className={HeaderStyle.logo} alt="logo" />
    </div>
  );
}

export default Header;
