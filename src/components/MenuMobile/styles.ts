import styled from "styled-components";

export const MenuMobile = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;

  @media (min-width: 650px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #171531;
  padding: 5px;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 4px 5px;
  border-radius: 6px;
  margin: 0 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hoverText};
  }

  & svg {
    margin-right: 3px;
  }

  a {
    position: absolute;
    inset: 0;
  }

  p {
    margin-top: 2px;
    text-align: center;
  }

  &.no-top {
    width: 49.7px;
    max-width: 49.7px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;
