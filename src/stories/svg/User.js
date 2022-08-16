import * as React from 'react';

const User = (props) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.672 5.311a2.59 2.59 0 1 1 5.18 0 2.59 2.59 0 0 1-5.18 0ZM9.262.4a4.911 4.911 0 1 0 0 9.823 4.911 4.911 0 0 0 0-9.823Zm-3.75 11.252A4.912 4.912 0 0 0 .6 16.564v1.875a1.16 1.16 0 1 0 2.32 0v-1.875a2.59 2.59 0 0 1 2.591-2.59h7.502a2.59 2.59 0 0 1 2.59 2.59v1.875a1.16 1.16 0 1 0 2.321 0v-1.875a4.912 4.912 0 0 0-4.91-4.912H5.51Z"
      fill="#2C3136"
    />
  </svg>
);

export default User;
