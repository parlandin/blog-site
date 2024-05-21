import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 30px;
`;
