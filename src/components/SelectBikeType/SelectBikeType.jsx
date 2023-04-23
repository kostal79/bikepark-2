import React, { useEffect, useRef, useState } from "react";
import classes from "./SelectBikeType.module.css";
import TypeBikeItem from "../TypeBikeItem/TypeBikeItem";
import BlueButton from "../BlueButton/BlueButton";
import TypeSkeleton from "../TypeSkeleton/TypeSkeleton";
import { useSelector } from "react-redux";
import { ReactComponent as Scroller } from "../../assets/scroller.svg";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import getAllCollection from "../../Api/getAllCollection";
import scrollFunc from "../../utils/scrollFunc/scrollFunc";
import { selectedDateFinish, selectedDateStart } from "../../redux/slices/calendarSlice";
import useSearchBikes from "../../hooks/useSearchBikes/useSearchBikes";

const SelectBikeType = () => {
  const [types, setTypes] = useState();
  const scrollRef = useRef(0);
  const dateStart = useSelector(selectedDateStart);
  const dateFinish = useSelector(selectedDateFinish);
  const [, getBikes] = useSearchBikes();
  
  const scrollBikes = () => {
    const scrollField = document.querySelector(`.${classes.types}`);
    const steps = types.length;
    scrollFunc(scrollField, steps, scrollRef);
  }
  
  const searchHandler = (num) => {
    if (dateStart && dateFinish) {
        getBikes(num);
    } else {
      alert("Choose dates")
    }
  };
  
  useEffect(() => {async function fetchData() {
    const typesBikesCollection = collection(db, "bike_types");
    const allBikesTypes = await getAllCollection(typesBikesCollection);
    setTypes(
      allBikesTypes.map((bike) => (
        <TypeBikeItem
          material={bike.material}
          description={bike.description}
          price={bike.price}
          imageRef={bike.imageRef}
          key={bike.id}
        />
      ))
    );
  }
  fetchData()
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
          onClick={() => searchHandler(8)}
        />
      </div>
    </div>
  );
};

export default SelectBikeType;
