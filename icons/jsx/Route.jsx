import * as React from "react";

function SvgRoute(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 15.18V3h-8v16H7V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V21h8V5h4v10.18A2.996 2.996 0 0018 21c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82z" />
    </svg>
  );
}

export default SvgRoute;
