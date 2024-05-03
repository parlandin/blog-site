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
`;

export const Ul = styled.ul`
  ${DefaultStyle}
`;

export const Ol = styled.ol`
  ${DefaultStyle}
`;

export const Li = styled.li`
  ${DefaultStyle}
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
`;

export const Img = styled.img`
  ${DefaultStyle}
  max-width: 100%;
  height: auto;
`;
