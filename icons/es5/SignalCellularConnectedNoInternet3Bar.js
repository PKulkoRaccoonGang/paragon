function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSignalCellularConnectedNoInternet3Bar(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillOpacity: 0.3,
    d: "M22 8V2L2 22h16V8h4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 22V6L2 22h16zm2-12v8h2v-8h-2zm0 12h2v-2h-2v2z"
  }));
}

export default SvgSignalCellularConnectedNoInternet3Bar;