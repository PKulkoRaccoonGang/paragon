function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgNetworkWifi1Bar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0012 4zm3.32 10.84C14.34 14.3 13.2 14 12 14c-1.2 0-2.34.3-3.32.84L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-5.76 5.77z"
  }));
}

export default SvgNetworkWifi1Bar;