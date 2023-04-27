import React, { useEffect, useState } from "react";
import classes from "./AboutReviews.module.css";
import { getReviews } from "../../Api/getReviews";
import Slider from "../Slider/Slider";
import ReviewSkeleton from "../ReviewSkeleton/ReviewSkeleton";

const AboutReviews = () => {
  const [rews, setRews] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    async function uploadReviews() {
      const array = await getReviews();
      setRews(array);
      setSkeleton(false);
    }
    uploadReviews();
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Отзывы</h2>
      <div className={classes.slider__mobile}>
        <Slider array={rews} n={1} />
      </div>
      {skeleton && (
        <div className={classes.skeleton__mobile}>
          <ReviewSkeleton />
        </div>
      )}
      <div className={classes.slider__tablet}>
        <Slider array={rews} n={2} />
      </div>
      {skeleton && (
        <div className={classes.skeleton__tablet}>
          <ReviewSkeleton />
          <ReviewSkeleton />
        </div>
      )}
      <div className={classes.slider__desktop}>
        <Slider array={rews} n={3} />
      </div>
      {skeleton && (
        <div className={classes.skeleton__desktop}>
          <ReviewSkeleton />
          <ReviewSkeleton />
          <ReviewSkeleton />
        </div>
      )}
    </div>
  );
};

export default AboutReviews;
