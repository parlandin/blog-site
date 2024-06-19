import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "@components/Title";
import { graphql } from "gatsby";
import PostBlogCard from "@components/PostBlogCard";
import * as S from "@styles/blogStyles";
import SEO from "@components/SEO";
import { pageTransitionOut } from "@src/animations/pagesTransition";

const BlogPage = ({ data, location }: PageProps<Queries.AllBlogPostsQuery>) => {
  return (
    <S.Container key={location.pathname} {...pageTransitionOut}>
      <Title $fontWeight="500">Meus Posts</Title>
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
  );
};

export default BlogPage;

export const query = graphql`
  query AllBlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
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

export const Head: HeadFC = ({ location }) => {
  return (
    <SEO
      title="Meus posters"
      pathname={location.pathname}
      description="Aqui você encontra todos os meus posters e artigos sobre tecnologia, programação e desenvolvimento web. Além de dicas e tutoriais sobre React, Next.js, Gatsby e muito mais. Um blog para quem ama tecnologia e programação. 🚀"
    />
  );
};
