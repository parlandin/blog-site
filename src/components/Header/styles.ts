import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  width: 100%;
  margin: 50px auto 50px;
  position: sticky;
  top: -1px;
  background-color: transparent;
  display: flex;
  max-width: 775px;
  padding: 10px 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #aa67ac;
  box-sizing: border-box;
  font-family: "Marck Script";
  font-family: "Architects Daughter";
  font-weight: 400;
  font-style: normal;
  transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
  font-size: 1.2rem;
  z-index: 10;

  &.full {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    width: 100%;
    max-width: 1920px;
    margin: 50px auto 50px;
  }

  @media (max-width: 650px) {
    top: -2px;
    transform: none;
    margin: 20px 0 40px;
    max-height: 40px;
  }

  &.halloween {
    backdrop-filter: blur(4px);
    background-color: #00000014;
    border-radius: 8px;
    padding: 4px;
  }
`;

export const Logo = styled(Link)`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }

  & p {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
