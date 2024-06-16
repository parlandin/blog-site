import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 26px;
  cursor: pointer;
  align-items: flex-end;
`;

export const Input = styled.input`
  display: none;

  &:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(-5px, 10px);
  }

  &:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  &:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(-2px, -6px) rotatez(45deg);
  }
`;

export const Span = styled.span`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  height: 3px;
  margin: 3px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

  &:nth-of-type(1) {
    width: 50%;
  }

  &:nth-of-type(2) {
    width: 100%;
  }

  &:nth-of-type(3) {
    width: 75%;
  }
`;
