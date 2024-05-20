import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import MDXWrapper from "@layouts/MDXWrapper";
import * as S from "./styles";
import { formatDate } from "@utils/formatDate";

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
      }
    }
  }
`;

export default FistBlog;
