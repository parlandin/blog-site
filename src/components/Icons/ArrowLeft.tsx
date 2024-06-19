import React from "react";

const ArrowLeft = () => {
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
      className="feather feather-arrow-left"
      viewBox="0 0 24 24"
    >
      <path d="M19 12L5 12"></path>
      <path d="M12 19L5 12 12 5"></path>
    </svg>
  );
};

export default React.memo(ArrowLeft);
