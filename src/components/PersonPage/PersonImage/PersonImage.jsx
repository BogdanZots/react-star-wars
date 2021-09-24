import React, { useEffect } from "react";
import s from "./PersonImage.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { checkIsObjEmpty } from "../../../services/getPeopleData";
import {
  setPersonToFavorit,
  removePersonFromFavorit,
} from "../../../store/actions";
import { useSelector } from "react-redux";
import PersonImageStar from "./PersonImageStar/PersonImageStar";
const PersonImage = ({ personPhoto, personName, personId }) => {
  const dispatch = useDispatch();
  const { favoritePage } = useSelector((store) => store);
  const [isFavorite, setIsFavorite] = useState(
    checkIsObjEmpty(favoritePage[personId])
  );

  useEffect(() => {
    setIsFavorite(checkIsObjEmpty(favoritePage[personId]));
  }, [personId]);

  const toogleFavoriteStatus = () => {
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      dispatch(
        setPersonToFavorit({
          [personId]: {
            personName,
            personPhoto,
            id:personId
          },
        })
      );
    } else {
      setIsFavorite(!isFavorite);
      dispatch(removePersonFromFavorit({ personId }));
    }
  };
  return (
    <>
      <div className={s.container}>
        <PersonImageStar
          isFavorite={isFavorite}
          toogleFavoriteStatus={toogleFavoriteStatus}
        />
        <img className={s.photo} src={personPhoto} alt={personName} />
      </div>
    </>
  );
};
PersonImage.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
};

export default PersonImage;
