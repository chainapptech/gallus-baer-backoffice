import * as React from "react"

const ClockOutline = (props) => (
  <svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 12c0-5.383 4.367-9.75 9.75-9.75s9.75 4.367 9.75 9.75-4.367 9.75-9.75 9.75S2.25 17.383 2.25 12ZM12 3.75A8.252 8.252 0 0 0 3.75 12 8.252 8.252 0 0 0 12 20.25 8.252 8.252 0 0 0 20.25 12 8.252 8.252 0 0 0 12 3.75Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.25a.75.75 0 0 1 .75.75v6h3.75a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75Z"
    />
  </svg>
)

export default ClockOutline
