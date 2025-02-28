import React from "react";
import { MDXProvider } from "@mdx-js/react";
import * as S from "./styles";

interface MDXWrapperProps {
  children: React.ReactNode;
}

const components = {
  h1: S.H1,
  h2: S.H2,
  h3: S.H3,
  h4: S.H4,
  h5: S.H5,
  h6: S.H6,
  thematicBreak: S.ThematicBreak,
  blockquote: S.Blockquote,
  ul: S.Ul,
  ol: S.Ol,
  li: S.Li,
  p: S.P,
  pre: S.Pre,
  table: S.Table,
  tr: S.Tr,
  th: S.Th,
  td: S.Td,
  code: S.Code,
  em: S.Em,
  strong: S.Strong,
  del: S.Delete,
  a: S.A,
  img: S.Img,
  hr: S.ThematicBreak,
};

const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXWrapper;
