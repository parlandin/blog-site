import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 50px auto 50px;
  position: sticky;
  top: 0px;
  background-color: transparent;
  display: flex;
  max-width: 768px;
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #aa67ac;
  box-sizing: border-box;
  font-family: "Marck Script", cursive;
  font-weight: 400;
  font-style: normal;
  transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
  font-size: 1.2rem;

  &.full {
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    width: 100%;
    max-width: 100%;
    padding: 10px 15px;
  }
`;

export const Logo = styled.a`
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
    color: #aa67ac;
  }
`;
