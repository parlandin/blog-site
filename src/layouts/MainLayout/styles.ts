import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vmin;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  z-index: 2;
`;

export const Main = styled.main`
  max-width: 650px;
  padding: 0 10px;
  width: 100%;
  margin: 40px auto 0;
  height: 100%;
`;

export const MenuMobileWrapper = styled.section`
  width: 100%;
  height: 50px;

  @media (min-width: 650px) {
    display: none;
  }
`;
