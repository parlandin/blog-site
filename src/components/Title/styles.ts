import styled from "styled-components";

interface TitleProps {
  $fontSize?: string;
  $position?: string;
  $margin?: string;
  $fontWeight?: string;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.$fontSize &&
    props.$position &&
    `
    font-size: ${props.$fontSize};
    text-align: ${props.$position};
  `}
  color: ${(props) => props.theme.colors.primary};
  margin: ${(props) => props.$margin};
  font-weight: ${(props) =>
    props.$fontWeight ? props.$fontWeight : "inherit"};

  &.halloween {
    text-align: center;
    font-family: "Pirata One", cursive;

    &.black {
      color: #000;
    }
  }
`;

export { Title };
