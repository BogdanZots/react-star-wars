import React from "react";
import PropTypes, { string } from "prop-types";
import s from "./PeopleNavigation.module.css";
import { Link } from "react-router-dom";
import UiButton from "../../../UI/UiButton/UiButton";

export default function PeopleNavigation({
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) {
  const handleChangeNext = () => {
    return getResource(nextPage);
  };
  const handleChangePrev = () => {
    return getResource(prevPage);
  };
  return (
    <div className={s.container}>
      <Link to={`?page=${counterPage - 1}`} className={s.buttons}>
        <UiButton
          handleChange={handleChangePrev}
          disabled={!prevPage}
          theme="dark"
          text="Prev"
        />
      </Link>
      <Link to={`?page=${counterPage + 1}`} className={s.buttons}>
        <UiButton
          handleChange={handleChangeNext}
          disabled={!nextPage}
          theme="dark"
          text="Next"
        />
      </Link>
    </div>
  );
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func.isRequired,
  prevPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
  counterPage: PropTypes.number.isRequired,
};
