import React, { useEffect, useRef, useState } from "react";
import { child, get, ref } from "firebase/database";
import classes from "./SelectBikeType.module.css";
import TypeBikeItem from "../TypeBikeItem/TypeBikeItem";
import BlueButton from "../BlueButton/BlueButton";
import TypeSkeleton from "../TypeSkeleton/TypeSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { setResultList } from "../../redux/slices/searchResultsSlice";
import { ReactComponent as Scroller } from "../../assets/scroller.svg";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import getAllCollection from "../../Api/getAllBikesCollection";

const SelectBikeType = () => {
  const [types, setTypes] = useState();
  const scrollRef = useRef(0);
  const selectedBikeTypes = useSelector((state) => state.bikes.bikeTypes);
  const startDate = useSelector((state) => state.calendar.dateStart);
  const finisgDate = useSelector((state) => state.calendar.dateFinish);
  const dispatch = useDispatch();
  
  const scrollBikes = () => {
    const scrollField = document.querySelector(`.${classes.types}`);
    const maxScroll = scrollField.scrollLeftMax;
    const shift = scrollField.scrollWidth / types.length;
    scrollRef.current =
    scrollRef.current < maxScroll ? scrollRef.current + shift : 0;
    scrollField.scrollLeft = scrollRef.current;
  };
  
  const searchBikes = () => {};
  
  useEffect(() => {async function fetchData() {
    const typesBikesCollection = collection(db, "bike_types");
    const allBikesTypes = await getAllCollection(typesBikesCollection);
    console.log(allBikesTypes)
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
          onClick={searchBikes}
        />
      </div>
    </div>
  );
};

export default SelectBikeType;
