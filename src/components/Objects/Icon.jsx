import React from "react";
const { PropTypes } = React;

const Icon = props => {
  //return props.icon;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox={props.icon.viewBox}
      width="100%"
      height="100%"
    >
      {props.icon.path}
    </svg>
  );
};

Icon.propTypes = {
  // icon: PropTypes.string.isRequired
};

export default Icon;
