import styled, { css } from "styled-components";

const defaultStyle = css`
  color: ${(props) => props.theme.colors.text};
  word-break: break-all;
  word-wrap: break-word;
  /* overflow-x: scroll;
  white-space: pre-wrap; */
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

export const Span = styled.span`
  &.mention {
    display: inline-block;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.hoverText};
    background-color: ${({ theme }) => theme.colors.tertiary};
    margin: 0 2px;
    border-radius: 4px;
    padding: 2px;
    height: fit-content;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  cursor: pointer;
`;

export const Blockquote = styled.blockquote`
  ${defaultStyle}
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

export const Ul = styled.ul`
  ${defaultStyle}
  list-style: disc;
  list-style-position: inside;

  &.contains-task-list {
    list-style-type: none;
    margin: 5px 0;
  }

  & ul {
    list-style-type: circle;
    margin: 0 25px 0;

    & ul {
      list-style-type: square;
      margin: 0 25px 0;

      & ul {
        list-style-type: disc;
        margin: 0 25px 0;
      }
    }
  }

  ::marker {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
`;

export const Ol = styled.ol`
  ${defaultStyle}
  list-style-type: decimal;
  list-style-position: inside;

  & ol {
    list-style-type: decimal;
    margin: 0 25px 0;

    & ol {
      list-style-type: decimal;
      margin: 0 25px 0;

      & ol {
        list-style-type: decimal;
        margin: 0 25px 0;
      }
    }
  }

  ::marker {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const Li = styled.li`
  ${defaultStyle}
  list-style: inherit;
  line-height: 1.5;

  & p {
    display: inline;
  }
`;

export const Strikethrough = styled.del`
  ${defaultStyle}
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  text-decoration-thickness: 2px;
`;

const tableStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-collapse: collapse;
`;

export const Table = styled.table`
  ${defaultStyle}
  ${tableStyle}
  width: 100%;
  margin: 10px 0;
`;

export const Tr = styled.tr`
  ${defaultStyle}
  ${tableStyle}
`;

export const Td = styled.td`
  ${defaultStyle}
  ${tableStyle}
  padding: 4px;
`;

export const Th = styled.th`
  ${defaultStyle}
  ${tableStyle}
  padding: 4px;
`;

export const Em = styled.em`
  ${defaultStyle}
  font-style: italic;
`;

export const Input = styled.input`
  ${defaultStyle}

  &:checked {
  }
`;
