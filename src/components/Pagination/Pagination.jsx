import React, { memo } from "react";
import BlueButton from "../BlueButton/BlueButton";
import classes from "./Pagination.module.css"


const Pagination = ({ nextPage, prevPage,  currentPage, totalPages}) => {
    const canNext = () => {
        return (currentPage + 1) >= totalPages;
    }

    const canPrev = () => {
        return (currentPage) <= 0;
    }
  return (
    <div className={classes.container}>
      <BlueButton onClick={prevPage} text="Назад" height={30} disabled={canPrev()}/>
      <BlueButton onClick={nextPage} text="Далее" height={30} disabled={canNext()}/>
    </div>
  );
};

export default memo(Pagination, memoPagination);

function memoPagination(prev, next) {
    if (prev.currentPage !== next.currentPage) return false;
    else return true;
}
