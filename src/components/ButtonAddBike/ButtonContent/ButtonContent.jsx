import React from "react";

const ButtonContent = ({ pressed }) => {
  if (pressed) {
    return (
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 3L3.99951 6L8.99951 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6H11M6 1V11"
          stroke="#297FFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default ButtonContent;
