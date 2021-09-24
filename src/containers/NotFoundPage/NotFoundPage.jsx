import React from "react";
import { useLocation } from "react-router";
import notFoundImg from "../../static/not-found.png";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div className={s.notFound}>
      <img alt="page not found" src={notFoundImg} />
      <p className={s.notFoundText}>
        No match for <u>{location.pathname}</u>
      </p>
    </div>
  );
};

export default NotFoundPage;
