import * as React from 'react';

const Calendar = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 2.262a.595.595 0 1 0-1.19 0v.595h-.596a2.381 2.381 0 0 0-2.381 2.381V15.952a2.381 2.381 0 0 0 2.381 2.381h11.905a2.381 2.381 0 0 0 2.38-2.38V5.238a2.381 2.381 0 0 0-2.38-2.382h-.595v-.595a.595.595 0 0 0-1.191 0v.595H6.25v-.595Zm8.928 1.786H4.464a1.19 1.19 0 0 0-1.19 1.19v.595h14.285v-.595a1.19 1.19 0 0 0-1.19-1.19h-1.19Zm2.381 2.976H3.273v8.928c0 .658.533 1.19 1.191 1.19h11.905a1.19 1.19 0 0 0 1.19-1.19V7.024Z"
    />
  </svg>
);

export default Calendar;
