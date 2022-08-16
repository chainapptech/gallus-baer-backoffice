import * as React from 'react';

const PaperPlane = (props) => (
  <svg
    width={18}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.015 1.29V4.6l8.373 1.589c1.205.228 1.205 1.954 0 2.183l-8.373 1.59v3.277L16.46 7.282 2.015 1.29ZM2.063.107C1.453-.151.904.369.904.897V4.83a.833.833 0 0 0 .677.818h.001l8.599 1.632-8.599 1.632a.833.833 0 0 0-.678.82v3.94a.828.828 0 0 0 1.164.747l14.823-6.114c.003 0 .006-.002.008-.003a1.112 1.112 0 0 0-.007-2.044L2.062.107Z"
      fill="#2C3136"
    />
  </svg>
);

export default PaperPlane;
