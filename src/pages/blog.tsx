import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import { Link, graphql } from "gatsby";
import PostBlogCard from "@components/PostBlogCard";
import * as S from "@styles/blogStyles";

const BlogPage = ({ data }: PageProps<Queries.AllBlogPostsQuery>) => {
  return (
    <MainLayout>
      <S.Container>
        <Title>Meus Posts</Title>
        <br />
        <p>Aqui você encontra todos os meus posters</p>
        <br />

        {data.allMdx.nodes.map((node) => {
          const { frontmatter, id, excerpt } = node;

          return (
            <PostBlogCard
              id={id}
              key={id}
              date={frontmatter?.date}
              excerpt={excerpt || ""}
              slug={frontmatter?.slug || ""}
              title={frontmatter?.title || ""}
              tags={[...(frontmatter?.tags || [])]}
            />
          );
        })}
      </S.Container>
    </MainLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query AllBlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "DD-MM-YYYY")
          title
          slug
          tags
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return (
    <>
      <title>blog2 </title>:
      <meta name="description" content="blog content" />;
    </>
  );
};
