import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getApiResource } from "@utils/network";
import { API_PERSON } from "@const/api";
import Loader from "@components/Loader/Loader";
import { WithErrorApi } from "@hoc/WithErrorApi";
import { getPeopleImg } from "@services/getPeopleData";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonImage from "@components/PersonPage/PersonImage/PersonImage";
import s from "./PersonPage.module.css";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack/PersonLinkBack";
const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);
const PersonPage = ({ match, setErrorApi, isLoading, setLoader }) => {
  const id = match.params.id; // получем id указаное в /:id , работает для всех /:
  const [personInfo, setPersonInfo] = useState(null);
  const [personId,setPersonId] = useState(null)
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setLoader(true);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImg(id));
        setPersonFilms(res.films);
        setPersonId(id)
        setLoader(false);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      {isLoading && !personInfo ? <Loader /> : ""}
      <PersonLinkBack />
      <div className={s.wrapper}>
        <span className={s.person__name}>{personName}</span>
        <div className={s.container}>
          <PersonImage
            className={s}
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
          />
          <PersonInfo  className={s} personInfo={personInfo} />
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <PersonFilms personFilms={personFilms} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
  setLoader: PropTypes.func,
};

export default WithErrorApi(PersonPage);
