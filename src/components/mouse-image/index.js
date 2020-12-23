import React from "react";
import { string } from "prop-types";

const MouseImage = ({ className }) => (
  <svg width={30} height={40} viewBox="0 0 30 40" className={className}>
    <g id="mouse" fill="#212121" data-name="mouse" transform="translate(-945 -1010)">
      <path
        id="mouse-alt"
        d="M17.5 0h-5A12.5 12.5 0 000 12.5v15A12.5 12.5 0 0012.5 40h5A12.5 12.5 0 0030 27.5v-15A12.5 12.5 0 0017.5 0zm8.75 27.5a8.759 8.759 0 01-8.75 8.75h-5a8.759 8.759 0 01-8.75-8.75v-15a8.759 8.759 0 018.75-8.75h5a8.759 8.759 0 018.75 8.75z"
        opacity={0.15}
        transform="translate(945 1010)"
      />
      <path
        id="wheel"
        d="M15 7.5a2.5 2.5 0 00-2.5 2.5v2.5a2.5 2.5 0 005 0V10A2.5 2.5 0 0015 7.5z"
        data-name="wheel"
        opacity={0.15}
        transform="translate(945 1010)"
      >
        <animateMotion path="M 0 8 V 0 Z" dur="2s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

MouseImage.defaultProps = {
  className: "mouse",
};

MouseImage.propTypes = {
  className: string,
};

export default MouseImage;
