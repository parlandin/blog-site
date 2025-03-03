import * as S from "./styles";
import React from "react";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import Prism from "prismjs";

interface ViewMarkdownProps {
  content: string;
}

interface CodeBlockProps {
  node?: unknown;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

const highlightCode = (code: string, language: string): string => {
  if (!language) {
    return code;
  }
  if (!Prism.languages[language]) {
    try {
      require(`prismjs/components/prism-${language}`);
    } catch (e) {
      console.warn(`Prism language '${language}' not found, using default`);
      return code;
    }
  }
  try {
    return Prism.highlight(code, Prism.languages[language], language);
  } catch (error) {
    console.warn(`Failed to highlight code in language ${language}`, error);
    return code;
  }
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  node,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  if (language) {
    const html = highlightCode(String(children), language);
    return (
      <pre className={`language-${language}`}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      </pre>
    );
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const ViewMarkdown: React.FC<ViewMarkdownProps> = ({ content }) => {
  const components: Components = {
    h1: S.H1,
    br: S.Break,
    p: S.P,
    div: S.Div,
    span: S.Span,
    a: S.Link,
    blockquote: S.Blockquote,
    ol: S.Ol,
    ul: S.Ul,
    li: S.Li,
    del: S.Strikethrough,
    table: S.Table,
    tr: S.Tr,
    th: S.Th,
    td: S.Td,
    em: S.Em,
    h2: S.H2,
    h3: S.H3,
    h4: S.Default,
    h5: S.Default,
    h6: S.Default,
    code: ({ node, className, children, ...props }) => {
      const isInline = !node?.properties?.className;

      if (isInline) {
        return (
          <S.Code className={className} {...props}>
            {children}
          </S.Code>
        );
      }

      return (
        <CodeBlock className={className} {...props} node={node}>
          {children}
        </CodeBlock>
      );
    },
  };

  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeSanitize,
          {
            attributes: {
              "*": ["className"],
            },
          },
        ],
      ]}
    >
      {content}
    </Markdown>
  );
};

export default ViewMarkdown;
