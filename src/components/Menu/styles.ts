import styled from "styled-components";

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
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 3px;
  font-weight: 400;
  cursor: pointer;
  color: #aa67ac;
  padding: 4px 5px;

  &:hover {
    background-color: #444b5b;
    border-radius: 6px;
    color: #ce69d1;
  }

  & i {
    margin-right: 3px;
    scale: 0.9;
  }
`;
