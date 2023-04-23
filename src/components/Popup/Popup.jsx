import React from "react";

const Popup = ({ instanse, closePopup }) => {
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h1>{instanse}</h1> <button onClick={closePopup}>Close X</button>{" "}
      </div>
    </div>
  );
};

export default Popup;
