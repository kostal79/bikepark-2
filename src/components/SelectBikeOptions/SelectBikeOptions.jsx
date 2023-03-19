import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BikeCardSmall from "../BikeCardSmall/BikeCardSmall";
import Bridge from "../Bridge/Bridge";
import BikeFilter from "../BikeFilter/BikeFilter";
import classes from "./SelectBikeOptions.module.css";
import { Link } from "react-router-dom";

const SelectBikeOptions = () => {
  const allResults = useSelector((state) => state.searchResults.resultList);
  const [brend, setBrend] = useState("Все");
  const [size, setSize] = useState("Все");
  const [filteredBikes, setFilteredBikes] = useState();
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);

  function getResults(data) {
    return data.map((item) => {
      return (
        <li className={classes.card} key={item.id}>
          <BikeCardSmall
            id={item.id}
            image={item.imageRef}
            bookedDates={item.bookedDates}
            name={item.brend}
            price={item.price}
            size={item.size}
            type={item.type}
            model={item.model}
          />
        </li>
      );
    });
  }

  useEffect(() => setFilteredBikes(getResults(allResults)), [allResults]);

  if (allResults.length > 0) {
    const brendList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.brend)))
    );
    const sizeList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.size)))
    );

    const handleBrend = (event) => {
      let filteredArray;
      if (event.target.value === "Все" && size === "Все") {
        filteredArray = allResults;
      } else if (event.target.value !== "Все" && size === "Все") {
        filteredArray = allResults.filter(
          (item) => item.brend === event.target.value
        );
      } else if (event.target.value === "Все" && size !== "Все") {
        filteredArray = allResults.filter((item) => item.size === size);
      } else {
        filteredArray = allResults.filter(
          (item) =>
            item.brend === event.target.value && item.size === size
        );
      }
      setFilteredBikes(getResults(filteredArray));
    };

    const handleSize = (event) => {
      let filteredArray;
      if (event.target.value === "Все" && brend === "Все") {
        filteredArray = allResults;
      } else if (event.target.value !== "Все" && brend === "Все") {
        filteredArray = allResults.filter(
          (item) => item.size ===event.target.value
        );
      } else if (event.target.value === "Все" && brend !== "Все") {
        filteredArray = allResults.filter((item) => item.brend === brend);
      } else {
        filteredArray = allResults.filter(
          (item) =>
            item.size === event.target.value && item.brend === brend
        );
      }
      setFilteredBikes(getResults(filteredArray));
    };

    return (
      <div className={classes.container}>
        <Bridge />
        <div className={classes["search-results-block"]}>
          <div className={classes.filters}>
            <div className={classes.filter}>
              <BikeFilter
                id="brend"
                title="Бренд"
                placeholder={brend}
                setPlaceholder={setBrend}
                optionsList={brendList}
                optionOnClick={handleBrend}
              />
            </div>
            <div className={classes.filter}>
              <BikeFilter
                id="size"
                title="Размер"
                placeholder={size}
                setPlaceholder={setSize}
                optionsList={sizeList}
                optionOnClick={handleSize}
              />
            </div>
          </div>
          <ul className={classes.list}>{filteredBikes}</ul>
          <div className={classes.button}>
            {orderedBikes.length > 0 ? (
              <Link
                className={`${classes.link} ${classes["link--active"]}`}
                to="/order"
              >
                Далее
              </Link>
            ) : (
              <div className={`${classes.link} ${classes["link--disactive"]}`}>
                Далее
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default SelectBikeOptions;
