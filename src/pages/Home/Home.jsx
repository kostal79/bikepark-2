import React from "react";
import Bonuses from "../../components/Bonuses/Bonuses";
import Bridge from "../../components/Bridge/Bridge";
import HomeUpperSelectionZone from "../../components/HomeUpperSelectionZone/HomeUpperSelectionZone";
import SelectBikeOptions from "../../components/SelectBikeOptions/SelectBikeOptions";
import SelectBikeType from "../../components/SelectBikeType/SelectBikeType";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div data-testid="home-page">
      <div className={classes.container}>
        <Bonuses />
        <HomeUpperSelectionZone />
      </div>
      <Bridge />
      <SelectBikeType />
      <SelectBikeOptions />
    </div>
  );
};

export default Home;
