import React from "react";
import { useSelector } from "react-redux";
import Bridge from "../Bridge/Bridge";
import classes from "./SelectBikeOptions.module.css";
import { Link } from "react-router-dom";
import useFilterBySize from "../../hooks/useFilterBySize/useFilterBySize";
import useFilterByBrend from "../../hooks/useFilterByBrend/useFilterByBrend";
import BikeCardSmall from "../BikeCardSmall/BikeCardSmall";
import Dropdown from "../Dropdown/Dropdown";

const SelectBikeOptions = () => {
  const allResults = useSelector((state) => state.searchResults.resultList);

  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);

  const { filteredByBrend, handleBrend } =
    useFilterByBrend(allResults);

  const { filteredBySize, handleSize } =
    useFilterBySize(allResults);

  if (allResults.length > 0) {
    const brendList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.brend)))
    );
    const sizeList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.size)))
    );

    const filteredBikes = filteredByBrend.map(
      (item) =>
        filteredBySize.includes(item) && (
          <BikeCardSmall
            id={item.id}
            image={item.imageRef}
            bookedDates={item.bookedDates}
            name={item.brend}
            price={item.price}
            size={item.size}
            type={item.type}
            model={item.model}
            key={item.id}
          />
        )
    );

    return (
      <div className={classes.container}>
        <Bridge />
        <div className={classes["search-results-block"]}>
          <div className={classes.filters}>
            <Dropdown
              optionsList={brendList}
              title="Бренд"
              onClick={handleBrend}
            />
            <Dropdown
              optionsList={sizeList}
              title="Размер"
              onClick={handleSize}
            />
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
