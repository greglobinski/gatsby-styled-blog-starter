import React from "react";

const SVGelem = props => {
  //return props.icon;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox={props.svg.viewBox}
      width="100%"
      height="100%"
    >
      {props.svg.path}
    </svg>
  );
};

export default SVGelem;
