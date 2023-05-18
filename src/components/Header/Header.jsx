import React from "react";
import classes from "./Header.module.css";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import HeaderRightSide from "../HeaderRightSide/HeaderRightSide";

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderNavbar />
      <HeaderRightSide />
    </div>
  );
};

export default Header;
