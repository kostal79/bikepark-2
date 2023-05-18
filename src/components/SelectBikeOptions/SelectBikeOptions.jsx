import React, { useCallback, useState } from "react";
import Bridge from "../Bridge/Bridge";
import classes from "./SelectBikeOptions.module.css";
import FiltersBlocks from "../FiltersBlocks/FiltersBlocks";
import FilteringResult from "../FilteringResult/FilteringResult";
import { useSelector } from "react-redux";

const SelectBikeOptions = () => {
  const [amount, setAmount] = useState(8);
  const moreButtonHandler = useCallback(() => setAmount((prev) => prev + 8),[])
  const allResults = useSelector((state) => state.searchResults.resultList);
 
  if (allResults.length > 0) {
    return (
      <div className={classes.container}>
        <Bridge />
        <div className={classes["search-results-block"]}>
          <FiltersBlocks amount={amount} />
          <FilteringResult moreButtonHandler={moreButtonHandler} amount={amount} allResults={allResults}/>
        </div>
      </div>
    );
  }
};

export default SelectBikeOptions;
