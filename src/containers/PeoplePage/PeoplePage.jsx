import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { WithErrorApi } from "@hoc/WithErrorApi";
import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@const/api";
import {
  getPeopleId,
  getPeopleImg,
  getPeoplePageId,
} from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import Loader from "@components/Loader/Loader";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleNavigation from "@components/PeoplePage/PeopleList/PeopleNavigation/PeopleNavigation";

const PeoplePage = ({ setErrorApi, setLoader, isLoading }) => {
  const query = useQueryParams();
  const queryPage = query.get("page"); // через get получем номер page? ( то что после page)
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const getResource = async (url) => {
    const res = await getApiResource(url);
    console.log(res);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setNextPage(res.next);
      setPrevPage(res.previous);
      setCounterPage(getPeoplePageId(url));
      setLoader(false);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);
  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {isLoading ? <Loader /> : ""}
      {people !== null && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default WithErrorApi(PeoplePage);
