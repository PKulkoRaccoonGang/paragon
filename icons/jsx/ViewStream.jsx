import * as React from "react";

function SvgViewStream(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 19v-6h18v6H3zM3 5v6h18V5H3z" />
    </svg>
  );
}

export default SvgViewStream;
