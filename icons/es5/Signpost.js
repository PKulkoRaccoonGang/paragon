function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function SvgSignpost(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2c-.55 0-1 .45-1 1v1H5.5C4.67 4 4 4.67 4 5.5v3c0 .83.67 1.5 1.5 1.5H11v2H6.62c-.4 0-.78.16-1.06.44l-1.5 1.5a1.49 1.49 0 000 2.12l1.5 1.5c.28.28.66.44 1.06.44H11v3c0 .55.45 1 1 1s1-.45 1-1v-3h5.5c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H13v-2h4.38c.4 0 .78-.16 1.06-.44l1.5-1.5c.59-.59.59-1.54 0-2.12l-1.5-1.5c-.28-.28-.66-.44-1.06-.44H13V3c0-.55-.45-1-1-1z"
  }));
}

export default SvgSignpost;