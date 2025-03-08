import styled, { css } from "styled-components";

const defaultStyle = css`
  color: ${(props) => props.theme.colors.text};
  word-break: break-all;
  word-wrap: break-word;
  /* overflow-x: scroll;
  white-space: pre-wrap; */
  font-size: 1rem;
`;

const headingStyle = css`
  font-weight: 600;
  font-family: "Love Ya Like A Sister", cursive;
  margin: 10px 0;
`;

export const H1 = styled.h1`
  ${defaultStyle}
  ${headingStyle}
  font-size: 1.4rem;
`;

export const H2 = styled.h2`
  ${defaultStyle}
  ${headingStyle}
  font-size: 1.3rem;
`;

export const H3 = styled.h3`
  ${defaultStyle}
  ${headingStyle}
  font-size: 1.2rem;
`;

export const Default = styled.h4`
  ${defaultStyle}
  ${headingStyle}
  font-size: 1.1rem;
`;

export const Break = styled.br`
  margin: 8px 0;
`;

export const P = styled.p`
  ${defaultStyle}
  margin: 2px 0;
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

  &.reply {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
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

export const strong = styled.strong`
  ${defaultStyle}
  font-weight: bold;
`;

export const Code = styled.code`
  ${defaultStyle}
  background-color: #282a36;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.9rem;
`;
