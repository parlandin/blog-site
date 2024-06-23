import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import PostBlogCard from "@components/PostBlogCard";
import * as S from "./styles";
import SEO from "@components/SEO";
import { pageTransitionOut } from "@src/animations/pagesTransition";
import { navigate } from "gatsby";
import Pagination from "@components/Pagination";

const BlogPage: React.FC<PageProps<Queries.AllBlogPostsQuery>> = ({
  location,
  data,
}) => {
  const { pageCount } = data.allMdx.pageInfo;

  const gotoPage = (page: number) => {
    navigate(`/blog/${page}`);
  };

  return (
    <S.Container key={location.pathname} {...pageTransitionOut}>
      <Title $fontWeight="500">Meus Posts</Title>
      <br />
      <p>Aqui você encontra todos os meus posters</p>
      <br />

      {data.allMdx.nodes.map((node) => {
        const { frontmatter, id, excerpt, fields } = node;

        return (
          <PostBlogCard
            id={id}
            key={id}
            date={frontmatter?.date}
            excerpt={excerpt || ""}
            slug={fields?.slug || ""}
            title={frontmatter?.title || ""}
            tags={[...(frontmatter?.tags || [])]}
            minToRead={node.fields?.readingTime?.minutes}
          />
        );
      })}

      <S.PaginationContainer>
        <Pagination
          pageCount={pageCount}
          onPageChange={({ selected }) => gotoPage(selected)}
        />
      </S.PaginationContainer>
    </S.Container>
  );
};

export default BlogPage;

export const query = graphql`
  query AllBlogPosts($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fields: { sourceName: { eq: "posts" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
        excerpt
        fields {
          slug
          readingTime {
            text
            minutes
          }
        }
      }
      pageInfo {
        pageCount
      }
    }
  }
`;

export const Head: HeadFC = ({ location }) => {
  return (
    <SEO
      title="Meus posters"
      pathname={location.pathname}
      description="Aqui você encontra todos os meus posters e artigos sobre tecnologia, programação e desenvolvimento web. Além de dicas e tutoriais sobre React, Next.js, Gatsby e muito mais. Um blog para quem ama tecnologia e programação. 🚀"
    />
  );
};
