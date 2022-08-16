import * as React from 'react';

const PaperPlaneOutline = (props) => (
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
      d="M3.618 5.148V9.12l10.047 1.907c1.447.275 1.447 2.346 0 2.62L3.618 15.553v3.933l17.333-7.148-17.333-7.19Zm.057-1.42c-.732-.31-1.39.315-1.39.948v4.72a1 1 0 0 0 .812.982l10.32 1.958-10.319 1.959a1 1 0 0 0-.813.982v4.729a.993.993 0 0 0 1.396.896l17.788-7.335.01-.005a1.332 1.332 0 0 0 0-2.449l-.009-.003L3.675 3.728Z"
    />
  </svg>
);

export default PaperPlaneOutline;
