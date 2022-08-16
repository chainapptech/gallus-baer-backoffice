import * as React from 'react';

const Dots = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.523 4.308a2.308 2.308 0 1 1-4.616 0 2.308 2.308 0 0 1 4.616 0Zm-2.308 10a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616Zm0 7.692a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615Z"
    />
  </svg>
);

export default Dots;
