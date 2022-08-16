import * as React from 'react';

const RightArrow = (props) => (
  <svg
    width={12}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.705 20.296a1.429 1.429 0 0 1 0-2.02l7.56-7.562-7.56-7.561a1.429 1.429 0 0 1 2.02-2.02l8.571 8.571a1.429 1.429 0 0 1 0 2.02l-8.571 8.572a1.429 1.429 0 0 1-2.02 0Z"
      fill="#063561"
    />
  </svg>
);

export default RightArrow;
