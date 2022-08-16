import * as React from "react";

const MagnifyingGlass = ({ fill, scale }) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale})` }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.698 1.402A8.322 8.322 0 0 1 8.322 0v.77V0a8.322 8.322 0 0 1 8.321 8.322 8.321 8.321 0 1 1-12.945-6.92Zm4.624.136a6.784 6.784 0 0 1 6.783 6.784M8.322 1.538a6.783 6.783 0 1 0 6.783 6.784"
      fill={fill ?? "#EBD3BD"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.412 13.412c.3-.3.788-.3 1.088 0l5.275 5.275a.77.77 0 1 1-1.088 1.088L13.412 14.5a.77.77 0 0 1 0-1.088Z"
      fill={fill ?? "#EBD3BD"}
    />
  </svg>
);

export default MagnifyingGlass;
