function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgShieldMoon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm3.97 12.41c-1.84 2.17-5.21 2.1-6.96-.07-2.19-2.72-.65-6.72 2.69-7.33.34-.06.63.27.51.6-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 003.18 2.2c.34.05.49.47.26.74z"
  }));
}

export default SvgShieldMoon;