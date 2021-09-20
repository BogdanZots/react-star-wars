import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.container}>
      <ul className={s.list__container}>
        <li className={s.list__item}>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li className={s.list__item}>
          <NavLink to="/people/?page=1" exact="">
            People
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
