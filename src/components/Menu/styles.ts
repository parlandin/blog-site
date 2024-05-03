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
  }
`;

export const MenuItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 3px;
  font-weight: 400;
  cursor: pointer;
  color: #aa67ac;
  padding: 4px 5px;
  border-radius: 6px;

  &:hover {
    background-color: #444b5b;
    color: #ce69d1;
  }

  & i {
    margin-right: 3px;
    scale: 0.9;
  }

  a {
    position: absolute;
    inset: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
