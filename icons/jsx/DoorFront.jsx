import * as React from "react";

function SvgDoorFront(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 19V3H5v16H3v2h18v-2h-2zm-4-6h-2v-2h2v2z" />
    </svg>
  );
}

export default SvgDoorFront;
