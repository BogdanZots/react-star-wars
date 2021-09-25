import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getApiResource, makeConcurrentRequest } from "../../utils/network";
import { API_PEOPLE, API_PEOPLE_ALL, API_PERSON } from "../../const/api";
import s from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import { getPeopleId } from "../../services/getPeopleData";
import PeopleNavigation from "@components/PeoplePage/PeopleList/PeopleNavigation/PeopleNavigation";
import { ITEMS_PRE_PAGE } from "../../const/api";
import cn from "classnames";
import {
  getAllDataFromArray,
  getAllUsersUlrs,
} from "../../services/getPeopleData";

const SearchPage = () => {
  const [people, setPeople] = useState([]);
  const [peoplePerPage, setPeoplePerPage] = useState([]);
  const [nextPage, setNextPage] = useState(6);
  const [prevPage, setPrevPage] = useState(0);
  const [searchPerson, setSearchPerson] = useState("");
  const [isDisableD, setIsDisabled] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await getApiResource(API_PERSON);
      const urls = getAllUsersUlrs(Math.ceil(data.count / 10), API_PEOPLE);
      const allPagesData = await makeConcurrentRequest(urls);
      let allPeople = [];
      for (let i = 0; i <= allPagesData.length - 1; i++) {
        allPeople.push(allPagesData[i].results);
      }
      setPeople(getAllDataFromArray(allPeople));
    })();
  }, []);
  useEffect(() => {
    setPeoplePerPage(people.slice(prevPage, nextPage));
  }, [nextPage, prevPage, people]);
  const filteredUsers = () => {
    if (searchPerson) {
      return people.filter((person) =>
        person.name.toLowerCase().includes(searchPerson.toLowerCase())
      );
    }
    return people;
  };
  useEffect(() => {
    if (searchPerson) {
      setPrevPage(0);
      setNextPage(ITEMS_PRE_PAGE);
    }
  }, [searchPerson]);
  const isDisabled = () => {
    if (searchPerson) {
      if (nextPage > filteredUsers().length) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
      return;
    }
    if (nextPage > people.length) {
      setIsDisabled(true);
      return true;
    } else {
      setIsDisabled(false);
      return false;
    }
  };
  useEffect(() => {
    console.log("is dis called");
    isDisabled();
  }, [filteredUsers, searchPerson]);
  console.log(filteredUsers().slice(prevPage, nextPage));
  return (
    <div>
      <h1 className="header__text">Search page</h1>
      <input
        className={s.search__input}
        value={searchPerson}
        placeholder="Search user"
        onChange={(e) => {
          setSearchPerson(e.target.value);
        }}
      />
      <div>
        <div className={s.buttons__container}>
          <button
            className={cn(s.button, s.dark)}
            disabled={prevPage === 0 ? true : false}
            onClick={() => {
              setNextPage(nextPage - ITEMS_PRE_PAGE);
              setPrevPage(prevPage - ITEMS_PRE_PAGE);
            }}
          >
            Prev
          </button>
          <button
            className={cn(s.button, s.dark)}
            disabled={isDisableD}
            onClick={() => {
              isDisabled();
              setPrevPage(prevPage + ITEMS_PRE_PAGE);
              setNextPage(nextPage + ITEMS_PRE_PAGE);
            }}
          >
            Next
          </button>
        </div>
        <ul className={s.person__container}>
          {filteredUsers()
            .slice(prevPage, nextPage)
            .map((person, _) => {
              const personId = getPeopleId(person.url);
              return (
                <Link className={s.link} to={`people/${personId}`}>
                  <li className={s.person__item} key={person.name}>
                    <img
                      className={s.img}
                      alt="person"
                      src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`}
                    />
                    <span className={s.person__name}>{person.name}</span>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
