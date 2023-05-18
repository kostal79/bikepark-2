import React, { memo, useCallback, useEffect, useState } from "react";
import classes from "./FiltersBlocks.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { useAllSizes } from "../../hooks/useAllSizes/useAllSizes";
import { useAllBrends } from "../../hooks/useAllBrends/useAllBrends";
import useSearchBikes from "../../hooks/useSearchBikes/useSearchBikes";

const FiltersBlocks = ({amount}) => {
  const [selectedBrend, setSelectedBrend] = useState("Все");
  const [selectedSize, setSelectedSize] = useState("Все");
  const [, fetchBikes] = useSearchBikes();
  const sizes = useAllSizes();
  const brends = useAllBrends();

  useEffect(() => {
    fetchBikes(amount, selectedBrend, selectedSize);
    // eslint-disable-next-line
  }, [amount, selectedBrend, selectedSize]);

  const selectBrandHandler = useCallback((event) => setSelectedBrend(event.target.innerText),[]);
  const selectSizeHandler = useCallback((event) => setSelectedSize(event.target.innerText),[])

  return (
    <div className={classes.filters}>
      {brends && (
        <Dropdown
          optionsList={brends}
          title="Бренд"
          onClick={selectBrandHandler}
        />
      )}
      {sizes && (
        <Dropdown
          optionsList={sizes}
          title="Размер"
          onClick={selectSizeHandler}
        />
      )}
    </div>
  );
};

export default memo(FiltersBlocks);
