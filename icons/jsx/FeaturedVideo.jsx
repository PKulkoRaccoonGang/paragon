import * as React from "react";

function SvgFeaturedVideo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23 3H1v18h22V3zm-11 9H3V5h9v7z" />
    </svg>
  );
}

export default SvgFeaturedVideo;
