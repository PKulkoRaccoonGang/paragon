import * as React from "react";

function SvgEco(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6.05 8.05a7.001 7.001 0 00-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 008 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z" />
    </svg>
  );
}

export default SvgEco;
