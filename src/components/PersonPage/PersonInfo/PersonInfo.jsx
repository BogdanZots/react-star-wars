import React from "react";
import s from "./PersonInfo.module.css";
import PropTypes from "prop-types";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={s.wrapper}>
      {personInfo && (
        <ul className={s.list__container}>
          {personInfo.map(({ title, data }) => {
            return (
              <li className={s.list__item} key={title}>
                <span className={s.item__title}>
                  {title} : {data}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
