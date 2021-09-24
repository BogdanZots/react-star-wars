import React from "react";
import s from "./PeopleList.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ id, img, name, url }) => {
        return (
          <li className={s.list__item} key={name}>
            <Link to={`/people/${id}`}>
              <img className={s.person__photo} alt={name} src={img} />
              <p>{name}</p>
            </Link>
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

