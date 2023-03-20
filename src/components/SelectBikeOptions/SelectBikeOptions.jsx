import React from "react";
import { useSelector } from "react-redux";
import Bridge from "../Bridge/Bridge";
import BikeFilter from "../BikeFilter/BikeFilter";
import classes from "./SelectBikeOptions.module.css";
import { Link } from "react-router-dom";
import useFilterResult from "../../hooks/useFilterResult";

const SelectBikeOptions = () => {
  const allResults = useSelector((state) => state.searchResults.resultList);
  const orderedBikes = useSelector((state) => state.orderedBikes.bikeForOrder);

  const {
    filteredBikes,
    brend,
    size,
    setBrend,
    setSize,
    handleBrend,
    handleSize,
} = useFilterResult(allResults)

  if (allResults.length > 0) {
    const brendList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.brend)))
    );
    const sizeList = ["Все"].concat(
      Array.from(new Set(allResults.map((item) => item.size)))
    );

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
