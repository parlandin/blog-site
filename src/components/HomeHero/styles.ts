import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

export const Content = styled.div`
  max-width: 60%;
  &.halloween {
    backdrop-filter: blur(5px);
    font-weight: 600;
    padding: 10px 4px;
    border-radius: 8px;
    background-color: #00001412;
  }
`;

export const ContextText = styled.p`
  line-height: 1.3;

  & span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const DayQuote = styled.blockquote`
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  margin: 20px 0 0;
  padding: 0.5em 10px;
  background: transparent;
  quotes: "“" "”" "‘" "’";

  &:before {
    color: ${({ theme }) => theme.colors.primary};
    content: open-quote;
    font-size: 38px;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  p {
    display: inline;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
  }
`;

export const Image = styled.div`
  max-height: 270px;
  box-sizing: border-box;

  & div,
  & img {
    max-height: 270px;
  }
`;
