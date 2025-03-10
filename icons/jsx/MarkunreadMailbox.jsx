import * as React from "react";

function SvgMarkunreadMailbox(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20V6z" />
    </svg>
  );
}

export default SvgMarkunreadMailbox;
