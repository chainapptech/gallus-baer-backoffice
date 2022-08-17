import * as React from "react";

const FilterSvg = (props) => (
  <svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.504 1.249A1.12 1.12 0 0 1 1.519.6h16.962a1.12 1.12 0 0 1 .854 1.842l-6.52 7.71v6.832a1.12 1.12 0 0 1-1.62 1.001L7.803 16.29a1.12 1.12 0 0 1-.619-1.001v-5.136l-6.52-7.71a1.12 1.12 0 0 1-.16-1.194Zm3.428 1.59L9.16 9.02c.17.203.264.459.264.724v4.854l1.154.577V9.743c0-.265.093-.521.264-.723l5.227-6.18H3.932Z"
      fill="#3B485C"
    />
  </svg>
);

export default FilterSvg;
