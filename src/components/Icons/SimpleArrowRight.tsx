import React from "react";

const SimpleArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="currentColor"
      version="1.1"
      viewBox="0 0 330.002 330.002"
      xmlSpace="preserve"
    >
      <path d="M233.252 155.997L120.752 6.001c-4.972-6.628-14.372-7.97-21-3-6.628 4.971-7.971 14.373-3 21l105.75 140.997-105.75 141.003c-4.971 6.627-3.627 16.03 3 21a14.93 14.93 0 008.988 3.001c4.561 0 9.065-2.072 12.012-6.001l112.5-150.004a15 15 0 000-18z"></path>
    </svg>
  );
};

export default React.memo(SimpleArrowRight);
