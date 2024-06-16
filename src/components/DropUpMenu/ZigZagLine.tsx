import React from "react";
import styled from "styled-components";

// Variáveis
const height = "10px";
const halfheight = `calc(${height} / 2)`;
const thickness = "110%";
const offset = "4px";
const backgroundcolor = "#190f39";
const linecolor = "#AA67AC";

const Zigzag = styled.div`
  margin-bottom: 10px;
  background: ${backgroundcolor};
  position: relative;
  height: ${height};
  z-index: 1;
  width: 100%;
  transform: translateY(-2px);

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
  }

  &:before {
    height: calc(${height} - ${offset});
    top: ${thickness};
    background: linear-gradient(
          -135deg,
          ${linecolor} ${halfheight},
          transparent 0
        )
        0 ${halfheight},
      linear-gradient(135deg, ${linecolor} ${halfheight}, transparent 0) 0
        ${halfheight};
    background-position: top left;
    background-repeat: repeat-x;
    background-size: ${height} ${height};
  }

  &:after {
    height: ${height};
    top: 90%;
    background: linear-gradient(
          -135deg,
          ${backgroundcolor} ${halfheight},
          transparent 0
        )
        0 ${halfheight},
      linear-gradient(135deg, ${backgroundcolor} ${halfheight}, transparent 0) 0
        ${halfheight};
    background-position: top left;
    background-repeat: repeat-x;
    background-size: ${height} ${height};
  }
`;

const ZigZagLine: React.FC = () => {
  return <Zigzag />;
};

export default ZigZagLine;
