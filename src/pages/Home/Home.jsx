import React from "react";
import Bonuses from "./Bonuses/Bonuses";
import Bridge from "@components/Bridge/Bridge";
import HomeUpperSelectionZone from "./HomeUpperSelectionZone/HomeUpperSelectionZone";
import SelectBikeOptions from "./SelectBikeOptions/SelectBikeOptions";
import SelectBikeType from "./SelectBikeType/SelectBikeType";
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
