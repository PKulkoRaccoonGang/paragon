function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgCyclone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
  }));
}

export default SvgCyclone;