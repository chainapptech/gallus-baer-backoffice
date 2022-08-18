import * as React from "react";

const BlueClock = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 8.001a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-2 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-2.08 3.92L8 8.001v-5.6c1.52 0 2.88.72 3.92 1.68s1.68 2.4 1.68 3.92-.64 2.88-1.68 3.92Z"
      fill="#3D6C9E"
    />
  </svg>
);

export default BlueClock;
