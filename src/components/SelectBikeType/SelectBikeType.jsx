import React, { useEffect, useRef, useState } from "react";
import { child, get, ref } from "firebase/database";
import classes from "./SelectBikeType.module.css";
import { database } from "../../firebase/firebase";
import TypeBikeItem from "../TypeBikeItem/TypeBikeItem";
import BlueButton from "../BlueButton/BlueButton";
import TypeSkeleton from "../TypeSkeleton/TypeSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setResultList } from "../../redux/slices/searchResultsSlice";
import {ReactComponent as Scroller} from "../../assets/scroller.svg"

const SelectBikeType = () => {
  const [types, setTypes] = useState();
  const scrollRef = useRef(0);
  const selectedBikeTypes = useSelector((state) => state.bikes.bikeTypes);
  const startDate = useSelector((state) => state.calendar.dateStart)
  const finisgDate = useSelector((state) => state.calendar.dateFinish)
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
    if (startDate && finisgDate) {
    const dbRef = ref(database);
    get(child(dbRef, "/bike_list"))
      .then((snapshot) => {
        if (snapshot.exists() && selectedBikeTypes) {
          let result = [];
          for (let [key, value] of Object.entries(snapshot.val())) {
            if (selectedBikeTypes.includes(value.type)) {
              result.push({
                key: key,
                id: value.id,
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
    } else {
      alert("Choose dates")
    }
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
          <Scroller />  
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
