import React from "react";

const Coffer: React.FC = () => {
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
      className="feather feather-coffee"
      viewBox="0 0 24 24"
    >
      <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
      <path d="M6 1L6 4"></path>
      <path d="M10 1L10 4"></path>
      <path d="M14 1L14 4"></path>
    </svg>
  );
};

export default React.memo(Coffer);
