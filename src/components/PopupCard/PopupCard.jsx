import PopupWithCloseCross from "../PopupWithCloseCross/PopupWithCloseCross";
import SwiperCardInfo from "../SwiperCardInfo/SwiperCardInfo";
import SwiperWithZoom from "../SwiperWithZoom/SwiperWithZoom";
import classes from "./PopupCard.module.css"

const PopupCard = (props) => {
    const closePopup = props.closePopup;
    const slidesRefs = props.imageRef;
  return (
    <PopupWithCloseCross closePopup={closePopup}>
      <div className={classes.container}>
        <div className={classes.swiper}>
          <SwiperWithZoom slidesRefs={slidesRefs}/>
        </div>
        <SwiperCardInfo {...props}/>
      </div>
    </PopupWithCloseCross>
  );
};

export default PopupCard;