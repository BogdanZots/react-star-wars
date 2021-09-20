import React from "react";
import s from "./PeopleList.module.css";
import PropTypes from "prop-types";

const PeopleList = ({ people }) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ id, img, name, url }) => {
        return (
          <li className={s.list__item} key={name}>
            <a href="#">
              <img className={s.person__photo} alt={name} src={img} />
              <p>{name}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;

