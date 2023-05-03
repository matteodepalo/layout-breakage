import React from 'react';
import { render, Text, Box } from 'ink';
render( /*#__PURE__*/React.createElement(Box, {
  width: 80,
  borderStyle: "round",
  borderColor: "green"
}, /*#__PURE__*/React.createElement(Box, {
  paddingX: 2
}, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, '  ', "\u2022"), /*#__PURE__*/React.createElement(Box, {
  flexGrow: 1,
  marginLeft: 1
}, /*#__PURE__*/React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))));