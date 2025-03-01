import styled from "styled-components";

export const SpoilerButton = styled.button`
  cursor: pointer;
  position: absolute;
  inset: 0;
  z-index: 3;
`;

export const ContainerSpoiler = styled.div`
  position: relative;
  overflow: hidden;
  display: inline;

  &.show {
    &.text {
      opacity: 0.7;
      background-color: ${(props) => props.theme.colors.background};
    }
  }

  &.hide {
    &.text {
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.text};
      color: transparent;
      width: fit-content;
    }

    & img {
      border-radius: 4px;
      overflow: hidden;
      filter: blur(35px);
      background-color: transparent;
    }

    /* &:hover {
      & img {
        filter: blur(20px);
      }
    } */

    &.image::after {
      position: absolute;
      content: "Spoiler";
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.background};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 6px 8px;
      border-radius: 4px;
    }
  }
`;
