import * as React from "react";

function SvgVolumeMute(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 9v6h4l5 5V4l-5 5H7z" />
    </svg>
  );
}

export default SvgVolumeMute;
