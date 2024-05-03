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
    font-family: "Montserrat", sans-serif;
    backdrop-filter: blur(4px);
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
  padding: 4px 5px;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
  }

  & svg {
    margin-right: 3px;
    //scale: 0.9;
  }

  a {
    position: absolute;
    inset: 0;
  }

  p {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
