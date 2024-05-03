import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vmin - 18px);
  background-color: #131127;
  color: #fafafa;
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
