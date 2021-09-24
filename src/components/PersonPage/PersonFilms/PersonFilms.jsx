import React, { useEffect, useState } from "react";
import { makeConcurrentRequest } from "../../../utils/network";
import s from "./PersonFilms.module.css"
const PersonFilms = ({ personFilms }) => {
  const [filmsData, setFilmsData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await makeConcurrentRequest(personFilms);
      if (data) {
        setFilmsData(data);
      }
    })();
  }, [personFilms]);
  return (
    <div className={s.wrapper}>
      {filmsData && (
        <ul className={s.container}>
          {filmsData
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(({ title, episode_id }) => {
              return (
                <li className={s.list__item}>
                  <span className={s.item__episode}>Episode{episode_id}</span>
                  <span className={s.item__colon}>:</span>
                  <span className={s.item__title}>{title}</span>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default PersonFilms;
