import styled from "styled-components";

interface TitleProps {
  fontSize?: string;
  position?: string;
  margin?: string;
  fontWeigth?: string;
}

const Title = styled.h1<TitleProps>`
  color: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.fontSize &&
    props.position &&
    `
    font-size: ${props.fontSize};
    text-align: ${props.position};
  `}
  color: ${(props) => props.theme.colors.primary};
  margin: ${(props) => props.margin};
  font-weight: ${(props) => (props.fontWeigth ? props.fontWeigth : "inherit")};
`;

export { Title };
