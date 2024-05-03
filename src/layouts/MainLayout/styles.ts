import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vmin;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const Main = styled.main`
  max-width: 650px;
  padding: 0 10px;
  width: 100%;
  margin: 40px auto 0;
`;
