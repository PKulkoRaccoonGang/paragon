import * as React from "react";

function SvgVideoChat(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 2v20l4-4h16V2H2zm15 11l-2-1.99V14H7V6h8v2.99L17 7v6z" />
    </svg>
  );
}

export default SvgVideoChat;
