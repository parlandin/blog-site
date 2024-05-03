import React from "react";

const Feather: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-feather"
      viewBox="0 0 24 24"
    >
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"></path>
      <path d="M16 8L2 22"></path>
      <path d="M17.5 15L9 15"></path>
    </svg>
  );
};

export default React.memo(Feather);
