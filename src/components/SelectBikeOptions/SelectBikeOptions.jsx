import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Bridge from "../Bridge/Bridge";
import classes from "./SelectBikeOptions.module.css";
import BikeCardSmall from "../BikeCardSmall/BikeCardSmall";
import Dropdown from "../Dropdown/Dropdown";
import BlueButton from "../BlueButton/BlueButton";
import { useAllSizes } from "../../hooks/useAllSizes/useAllSizes";
import { useAllBrends } from "../../hooks/useAllBrends/useAllBrends";
import useSearchBikes from "../../hooks/useSearchBikes/useSearchBikes";
import { getBikeForOrder } from "../../redux/slices/orderBikeSlice";
import PopupBook from "../PopupBook/PopupBook";

const SelectBikeOptions = () => {
  const allResults = useSelector((state) => state.searchResults.resultList);
  const sizes = useAllSizes();
  const brends = useAllBrends();
  const [selectedBrend, setSelectedBrend] = useState("Все");
  const [selectedSize, setSelectedSize] = useState("Все");
  const [, fetchBikes] = useSearchBikes();
  const [amount, setAmount] = useState(8);
  const bikesInOrder = useSelector(getBikeForOrder);

  useEffect(() => {
    fetchBikes(amount, selectedBrend, selectedSize);
    // eslint-disable-next-line
  }, [selectedBrend, selectedSize, amount]);

  if (allResults.length > 0) {
    const filteredBikes = allResults.map((bikeCard) => (
      <BikeCardSmall
        {...bikeCard}
        key={bikeCard.id}
      />
    ));

    return (
      <div className={classes.container}>
        <Bridge />
        <div className={classes["search-results-block"]}>
          <div className={classes.filters}>
            <Dropdown
              optionsList={brends}
              title="Бренд"
              onClick={(event) => setSelectedBrend(event.target.innerText)}
            />
            <Dropdown
              optionsList={sizes}
              title="Размер"
              onClick={(event) => setSelectedSize(event.target.innerText)}
            />
          </div>
          <ul className={classes.list}>{filteredBikes}</ul>
          <div className={classes.button}>
            <BlueButton
              text="Далее"
              height={60}
              width={300}
              fontSize={18}
              onClick={() => setAmount((prev) => prev + 8)}
              disabled={allResults.length < amount ? true : false}
            />
          </div>
        </div>
        {bikesInOrder.length > 0 && <PopupBook />}
      </div>
    );
  }
};

export default SelectBikeOptions;
