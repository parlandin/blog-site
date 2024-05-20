import React from "react";

const ArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-arrow-up"
      viewBox="0 0 24 24"
    >
      <path d="M12 19L12 5"></path>
      <path d="M5 12L12 5 19 12"></path>
    </svg>
  );
};

export default React.memo(ArrowUp);
