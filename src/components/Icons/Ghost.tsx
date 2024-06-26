import React from "react";
import styled from "styled-components";
const StyledGhostCharacter = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 18px;
    border: 2px solid;
    border-bottom: 0;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    overflow: hidden;
    background: radial-gradient(circle, currentColor 60%, transparent 40%)
        no-repeat 2px 4px/2px 2px,
      radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat 6px
        4px/2px 2px;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    bottom: -3px;
    transform: rotate(-45deg);
  }
  &::before {
    left: -1px;
  }
  &::after {
    right: -1px;
  }
`;
const GhostCharacter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  return (
    <>
      <StyledGhostCharacter {...props} ref={ref} icon-role="ghost-character" />
    </>
  );
});

export default GhostCharacter;
