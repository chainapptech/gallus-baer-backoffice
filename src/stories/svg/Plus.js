import * as React from 'react';

const Plus = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.667c.46 0 .834.373.834.833v6.667H17.5a.833.833 0 1 1 0 1.666h-6.666V17.5a.833.833 0 0 1-1.667 0v-6.667H2.5a.833.833 0 1 1 0-1.666h6.667V2.5c0-.46.373-.833.833-.833Z"
      fill="#063561"
    />
  </svg>
);

export default Plus;
