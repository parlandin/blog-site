import styled from "styled-components";
import { Link } from "gatsby";

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

export const ListItens = styled.ul`
  /*  &:last-of-type {
    //padding: 0;
    & a {
      padding: 0;

      svg {
        margin-right: 0;
      }
    }
  } */
`;

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

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
  }

  & svg {
    margin-right: 3px;
  }

  p {
    text-align: center;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
    opacity: 0.8;
  }
`;
