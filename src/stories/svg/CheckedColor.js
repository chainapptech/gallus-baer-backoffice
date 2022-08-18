import * as React from "react";

const CheckedColor = (props) => (
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
      d="M0 8.001a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm11.738-.908a.8.8 0 1 0-1.076-1.184L6.8 9.419 5.338 8.092a.8.8 0 0 0-1.076 1.184l2 1.818a.8.8 0 0 0 1.076 0l4.4-4Z"
      fill="#498500"
    />
  </svg>
);

export default CheckedColor;
