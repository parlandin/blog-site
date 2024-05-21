import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import MDXWrapper from "@layouts/MDXWrapper";
import * as S from "./styles";
import { formatDate } from "@utils/formatDate";
import SEO from "@components/SEO";

const FistBlog: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  const date = formatDate(data.mdx?.frontmatter?.date || "");
  return (
    <MainLayout>
      <S.Container>
        <Title margin="0 0 15px">{data.mdx?.frontmatter?.title}</Title>
        <S.DateText>Postado em: {date}</S.DateText>

        <MDXWrapper>{children}</MDXWrapper>
      </S.Container>
    </MainLayout>
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
      excerpt
    }
  }
`;

export const Head: HeadFC = ({ data }) => {
  //@ts-ignore
  const title = data.mdx?.frontmatter?.title || "";
  //@ts-ignore
  const description = data.mdx?.excerpt || "";
  //@ts-ignore
  const tags = data.mdx?.frontmatter?.tags || [];

  console.log("tags", tags);

  const tagsString = tags.join(", ");

  return <SEO title={title} description={description} category={tagsString} />;
};

export default FistBlog;
