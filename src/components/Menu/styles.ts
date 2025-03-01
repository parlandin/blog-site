import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const linkHoverAnimation = keyframes`
  from {
    width: 0;
    height: 0;
  }
 
  to {
    width: calc(100% + 3px);
    height: calc(100% + 1px); 
  }
`;

export const Menu = styled.nav`
  height: 100%;

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    /*  font-family: "Montserrat", sans-serif; */
    font-family: "Playwrite DE Grund", serif;
    backdrop-filter: blur(4px);
  }

  @media (max-width: 650px) {
    .only-desktop {
      display: none;
    }
  }
`;

export const MenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: 0 3px;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  transition: all 0.2s ease-in;
  margin-right: 0;
  padding: 4px 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
  }
`;

export const ListItens = styled.ul``;

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  margin: 0 3px;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  padding: 4px 5px;
  border-radius: 6px;
  transition: all 0.2s ease-in;
  background-color: ${(props) => props.theme.colors.background};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 6px;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.hover};
  }

  &:hover {
    ::before {
      left: -1px;
      top: -1px;
      animation: ${linkHoverAnimation} 0.4s ease-out forwards;
    }
    ::after {
      right: -3px;
      top: 3px;
      animation: ${linkHoverAnimation} 0.4s ease-out forwards;
    }
  }

  & svg {
    margin-right: 3px;
  }

  p {
    text-align: center;
  }

  &.active {
    ::before {
      left: -1px;
      top: -1px;
      animation: ${linkHoverAnimation} 0.4s ease-out both;
    }
    ::after {
      right: -3px;
      top: 3px;
      animation: ${linkHoverAnimation} 0.4s ease-out both;
    }
  }
`;
