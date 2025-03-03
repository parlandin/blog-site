import styled, { css } from "styled-components";

const defaultStyle = css`
  color: ${(props) => props.theme.colors.text};
  word-break: break-all;
  word-wrap: break-word;
`;

export const H1 = styled.h1`
  ${defaultStyle}
  font-size: 1rem;
  font-weight: 600;
`;

export const Break = styled.br`
  margin: 8px 0;
`;

export const P = styled.p`
  ${defaultStyle}
`;

export const Div = styled.div`
  ${defaultStyle}
`;
