import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  margin: 5px 0;
  color: ${(props) => props.theme.colors.secondary};

  svg {
    margin-right: 3px;
    width: 20px;
  }

  span {
    font-weight: 600;
  }
`;
