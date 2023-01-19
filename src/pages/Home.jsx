import React from "react";
import Bonuses from "../components/Bonuses/Bonuses";
import Bridge from "../components/Bridge/Bridge";
import RentType from "../components/RentType/RentType";
import SelectBikeOptions from "../components/SelectBikeOptions/SelectBikeOptions";
import SelectBikeType from "../components/SelectBikeType/SelectBikeType";
import SelectDate from "../components/SelectDate/SelectDate";
import SelectDelivery from "../components/SelectDelivery/SelectDelivery";
import classes from "./Home.module.css";

const Home = () => {

  return (
    <>
      <div className={classes.container}>
        <div className={classes.bonuses}>
          <Bonuses />
        </div>
        <section className={classes.selections}>
          <div className={classes.rentType}>
            <RentType />
          </div>
          <div className={classes.selectDate}>
            <SelectDate />
          </div>
          <div className={classes.selectDelivery}>
            <SelectDelivery
              selectionList={[
                { value: "0", text: "Самовывоз" },
                { value: "1", text: "Доставка" },
              ]}
            />
          </div>
        </section>
        <div></div>
      </div>
      <Bridge />
      <SelectBikeType />
      <SelectBikeOptions />
    </>
  );
};

export default Home;
