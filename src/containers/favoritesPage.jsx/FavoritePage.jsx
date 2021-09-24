import { useSelector } from "react-redux";
import s from "./FavoritePage.module.css";
import { Link } from "react-router-dom";

import React from "react";

const FavoritePage = () => {
  const storeData = useSelector((store) => store.favoritePage);
  console.log(Object.values(storeData));
  const favoritePersons = Object.values(storeData);
  return (
    <div>
      <h1 className="header__text">FavvoritePage</h1>
      <ul className={s.favorite__list}>
        {favoritePersons.map((person) => {
          return (
            <Link to={`people/${person.id}`}>
              <li className={s.favorite__item}>
                <img className={s.img} alt="person" src={person.personPhoto} />
                <span className={s.text}>{person.personName}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoritePage;
