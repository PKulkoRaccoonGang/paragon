function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgCleanHands(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.99 7l1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2zM1 22h4V11H1v11zM9.24 9.5L15 11.65V11a5 5 0 00-4-4.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.899 4.899 0 0013 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h3.99zM22 17h-9l-2.09-.73.33-.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3v-2z"
  }));
}

export default SvgCleanHands;