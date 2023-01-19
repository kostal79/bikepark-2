import React, { useEffect, useRef, useState } from "react";
import { child, get, ref } from "firebase/database";
import classes from "./SelectBikeType.module.css";
import { database } from "../../firebase/firebase";
import TypeBikeItem from "../TypeBikeItem/TypeBikeItem";
import BlueButton from "../BlueButton/BlueButton";
import TypeSkeleton from "../TypeSkeleton/TypeSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setResultList } from "../../redux/slices/searchResultsSlice";

const SelectBikeType = () => {
  const [types, setTypes] = useState();
  const scrollRef = useRef(0);
  const selectedBikeTypes = useSelector((state) => state.bikes.bikeTypes);
  const dispatch = useDispatch();

  const scrollBikes = () => {
    const scrollField = document.querySelector(`.${classes.types}`);
    const maxScroll = scrollField.scrollLeftMax;
    const shift = scrollField.scrollWidth / types.length;
    scrollRef.current =
      scrollRef.current < maxScroll ? scrollRef.current + shift : 0;
    scrollField.scrollLeft = scrollRef.current;
  };

  const searchBikes = () => {
    const dbRef = ref(database);
    get(child(dbRef, "/bike_list"))
      .then((snapshot) => {
        if (snapshot.exists() && selectedBikeTypes) {
          let result = [];
          for (let [key, value] of Object.entries(snapshot.val())) {
            if (selectedBikeTypes.includes(value.type)) {
              result.push({
                key: key,
                type: value.type,
                image: value.image,
                name: value.name,
                price: value.price,
                size: value.size,
                booked: value.booked,
                description: value.description,
              });
            }
          }
          dispatch(setResultList(result));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    async function getAllTypesBikes(basePath) {
      const dbRef = ref(database);
      get(child(dbRef, basePath))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let result = [];
            for (let [key, value] of Object.entries(snapshot.val())) {
              result.push(
                <TypeBikeItem
                  key={key}
                  type={key}
                  text={value.text}
                  price={value.price}
                  imageLink={value.image}
                  description={value.description}
                />
              );
            }
            setTypes(result);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getAllTypesBikes("all_types/");
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <p className={classes.title}>Тип велосипеда</p>
        <div className={classes.slide} onClick={scrollBikes}>
          <svg
            width="36"
            height="25"
            viewBox="0 0 36 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70271 9V3.05405C8.70271 1.91963 7.78308 1 6.64866 1V1C5.51424 1 4.5946 1.91963 4.5946 3.05405V14"
              stroke="#297FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7027 10.5V9.05405C8.7027 7.91963 9.62233 7 10.7568 7V7C11.8912 7 12.8108 7.91963 12.8108 9.05405V11"
              stroke="#297FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8108 10.5V10.0541C12.8108 8.91963 13.7304 8 14.8648 8V8C15.9993 8 16.9189 8.91963 16.9189 10.0541V12.5"
              stroke="#297FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9189 12.5V11.8107C16.9189 10.8614 17.7692 10.138 18.7062 10.29V10.29C19.452 10.4111 20 11.0551 20 11.8107V18.0335C20 18.6619 19.8027 19.2745 19.4359 19.7847L17.3032 22.7512C16.7396 23.5352 15.833 24 14.8674 24H6.64616C5.68055 24 4.77396 23.5352 4.21031 22.7512L1.99622 19.6714C1.68031 19.232 1.48915 18.7153 1.443 18.1761L1.18669 15.1813C1.07546 13.8817 1.8167 12.6592 3.02044 12.1569L4.59459 11.5"
              stroke="#297FFF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M30 17L35 12L30 7"
              stroke="#297FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={classes.types}>
        {types
          ? types
          : [...new Array(4)].map((item, index) => {
              return (
                <div key={index}>
                  <TypeSkeleton />
                </div>
              );
            })}
      </div>
      <div className={classes.button}>
        <BlueButton
          width={300}
          height={60}
          text={"Найти"}
          uppercase={false}
          fontSize={18}
          onClick={searchBikes}
        />
      </div>
    </div>
  );
};

export default SelectBikeType;
