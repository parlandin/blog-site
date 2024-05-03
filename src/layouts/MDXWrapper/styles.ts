import styled, { css } from "styled-components";

const DefaultStyle = css`
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
`;

const hashStyle = css`
  && a {
    top: 50%;
    transform: translateY(-50%) translateX(-100%);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    color: #aa67ac;
  }
`;

export const H1 = styled.h1`
  ${DefaultStyle}
  ${hashStyle}
  font-size: 2rem;
`;

export const H2 = styled.h2`
  ${DefaultStyle}
  ${hashStyle}
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  ${DefaultStyle}
  ${hashStyle}
  font-size: 1.25rem;
`;

export const H4 = styled.h4`
  ${DefaultStyle}
  ${hashStyle}
  font-size: 1.1rem;
`;

export const H5 = styled.h5`
  ${DefaultStyle}
  ${hashStyle}
  font-size: 1rem;
`;

export const H6 = styled.h6`
  ${DefaultStyle}
  font-size: 0.9rem;
`;

export const P = styled.p`
  ${DefaultStyle}
`;

export const ThematicBreak = styled.hr`
  ${DefaultStyle}
`;

export const Blockquote = styled.blockquote`
  ${DefaultStyle}
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
  ${DefaultStyle}
`;

export const Ol = styled.ol`
  ${DefaultStyle}
  list-style: decimal;
`;

export const Li = styled.li`
  ${DefaultStyle}
  list-style: disc;
`;

export const Table = styled.table`
  ${DefaultStyle}
`;

export const Tr = styled.tr`
  ${DefaultStyle}
`;

export const Td = styled.td`
  ${DefaultStyle}
`;

export const Th = styled.th`
  ${DefaultStyle}
`;

export const Pre = styled.pre`
  ${DefaultStyle}
`;

export const Code = styled.code`
  ${DefaultStyle}
`;

export const Em = styled.em`
  ${DefaultStyle}
  font-style: italic;
`;

export const Strong = styled.strong`
  ${DefaultStyle}
  font-weight: bold;
`;

export const Delete = styled.del`
  ${DefaultStyle}
  text-decoration: line-through;
`;

export const A = styled.a`
  ${DefaultStyle}
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Img = styled.img`
  ${DefaultStyle}
  max-width: 100%;
  height: auto;
`;
