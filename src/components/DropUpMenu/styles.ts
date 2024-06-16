import styled from "styled-components";

interface ContainerProps {
  $showMoreOptions: boolean;
}

export const Backdrop = styled.div.attrs<ContainerProps>(
  ({ $showMoreOptions }) => ({
    className: $showMoreOptions ? "open" : "closing",
  })
)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background-color: transparent;
  z-index: 9;
  transition: background-color 0.4s ease-in-out;
  display: none;

  @media (max-width: 650px) {
    display: block;
  }

  &.open {
    background-color: rgba(0, 0, 0, 0.34);
  }

  &.closing {
    transition: background-color 0.4s ease-in-out, visibility 1s linear;
    visibility: hidden;
    opacity: 0;
  }
`;

export const Container = styled.div.attrs<ContainerProps>(
  ({ $showMoreOptions }) => ({
    className: $showMoreOptions ? "open" : "closing",
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.MenuMobileBackground};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-right-width: 3px;
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index: 10;
  transition: opacity 0.3s ease-in-out, height 0.3s linear;
  height: 0;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 650px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${(props) => props.theme.colors.MenuMobileBackground};
    bottom: -9px;
    right: 10px;
    z-index: 5;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 11px solid ${(props) => props.theme.colors.primary};
    bottom: -12px;
    right: 9px;
    z-index: 4;
  }

  &.open {
    visibility: visible;
    opacity: 1;
    height: 180px;
  }

  &.closing {
    transition: height 0.6s linear, opacity 0.3s ease-in-out,
      visibility 1s linear;
  }

  @media (min-width: 459px) {
    right: 20px;
  }

  @media (min-width: 527px) {
    right: 28px;
  }

  @media (min-width: 585px) {
    right: 36px;
  }

  @media (min-width: 587px) {
    right: 30px;
  }
`;

export const ListMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transform: scaley(0);
  visibility: hidden;

  ${Container}.open & {
    visibility: visible;
    transform: scaley(1);
    transition: transform 1s ease-out;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) => props.theme.colors.MenuMobileText};
  display: flex;
  align-items: center;

  & svg {
    margin-right: 7px;
    width: 20px;
    height: 20px;
  }
`;
