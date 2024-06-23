import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import HomeHero from "@components/HomeHero";
import * as S from "@styles/homeStyles";
import PostBlogCard from "@components/PostBlogCard";
import SEO from "@components/SEO";
import WordOfTheDay from "@components/WordOfTheDay";
import { pageTransitionOut } from "@animations/pagesTransition";

const IndexPage: React.FC<PageProps<Queries.LastBlogPostsQuery>> = ({
  data,
  location,
}) => {
  return (
    <>
      <S.Container key={location.pathname} {...pageTransitionOut}>
        <HomeHero />
        <WordOfTheDay />

        <S.ContentWrapper>
          <Title $fontWeight="500">Postagens recentes</Title>

          <S.PostContainer>
            {data.allMdx.nodes.map((node) => {
              const {
                frontmatter,
                id,
                excerpt,
                fields: { slug },
              } = node;

              return (
                <PostBlogCard
                  id={id}
                  key={id}
                  date={frontmatter?.date}
                  excerpt={excerpt || ""}
                  slug={slug || ""}
                  title={frontmatter?.title || ""}
                  tags={frontmatter?.tags || []}
                  minToRead={node.fields?.readingTime?.minutes}
                />
              );
            })}
          </S.PostContainer>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query LastBlogPosts {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 5
      filter: { fields: { sourceName: { eq: "posts" } } }
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
    }
  }
`;

export const Head: HeadFC = ({ location }) => (
  <SEO title="Home" pathname={location.pathname} />
);
