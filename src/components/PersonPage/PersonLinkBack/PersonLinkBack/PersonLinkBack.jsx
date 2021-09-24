import React from "react";
import s from "./PersonLinkBack.module.css";
import { useHistory } from "react-router";
import iconBack from "../../../../static/back.svg"
const PersonLinkBack = () => {
  const history = useHistory();
  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <a href="#" onClick={handleGoBack} className={s.link}>
      <img alt="back" src={iconBack} className={s.link__img} />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
