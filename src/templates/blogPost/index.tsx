import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import MDXWrapper from "@layouts/MDXWrapper";
import * as S from "./styles";
import { formatDate } from "@utils/formatDate";
import SEO from "@components/SEO";
import { pageTransitionIn } from "@animations/pagesTransition";
import BackButton from "@components/BackButton";
import Comments from "@components/Comments";

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  location,
  children,
}) => {
  const date = formatDate(data.mdx?.frontmatter?.date || "");

  return (
    <S.Container key={location.pathname} {...pageTransitionIn}>
      <S.BackButtonWrapper>
        <BackButton />
      </S.BackButtonWrapper>
      <Title margin="0 0 15px">{data.mdx?.frontmatter?.title}</Title>
      <S.DateText>Postado em: {date}</S.DateText>

      <MDXWrapper>{children}</MDXWrapper>

      <S.Line />
      <Comments />
    </S.Container>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`;

export const Head: HeadFC = ({ data, location }) => {
  //@ts-ignore
  const title = data.mdx?.frontmatter?.title || "";
  //@ts-ignore
  const description = data.mdx?.excerpt || "";
  //@ts-ignore
  const tags = data.mdx?.frontmatter?.tags || [];

  const tagsString = tags.join(", ");

  return (
    <SEO
      title={title}
      description={description}
      category={tagsString}
      pathname={location.pathname}
    />
  );
};

export default BlogPost;
