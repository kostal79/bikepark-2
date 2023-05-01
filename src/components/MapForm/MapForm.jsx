import React from "react";
import classes from "./MapForm.module.css";

const MapForm = () => {
  return (
    <iframe
    className={classes.frame}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510207691!2d55.271801475989626!3d25.197201831699356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2z0JHRg9GA0LTQti3QpdCw0LvQuNGE0LA!5e0!3m2!1sru!2str!4v1682663241382!5m2!1sru!2str"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapForm;
