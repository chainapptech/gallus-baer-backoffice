import * as React from "react";

const Danger = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 .667C4.405.667.667 4.405.667 9c0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.334-3.738 8.334-8.333C17.334 4.405 13.595.667 9 .667Zm.802 12.817H8.199V11.88h1.603v1.603Zm-.16-2.56H8.358l-.24-6.411h1.763l-.24 6.41Z"
      fill="#D23E3F"
    />
  </svg>
);

export default Danger;
