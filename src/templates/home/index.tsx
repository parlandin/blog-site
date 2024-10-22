import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import HomeHero from "@components/HomeHero";
import * as S from "./homeStyles";
import PostBlogCard from "@components/PostBlogCard";
import SEO from "@components/SEO";
import WordOfTheDay from "@components/WordOfTheDay";
import { pageTransitionOut } from "@animations/pagesTransition";

const IndexPage: React.FC<PageProps<Queries.LastBlogPostsAndImagesQuery>> = ({
  data,
  location,
}) => {
  return (
    <>
      <S.Container key={location.pathname} {...pageTransitionOut}>
        <HomeHero image={data.heroImage} />
        <WordOfTheDay image={data.wordOfTheDayImage} />

        <S.ContentWrapper>
          <Title $fontWeight="500">Postagens recentes</Title>

          <S.PostContainer>
            {data.allMdx.nodes.map((node) => {
              const {
                frontmatter,
                id,
                excerpt, //@ts-ignore
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
  query LastBlogPostsAndImages(
    $heroImage: String!
    $wordOfTheDayImage: String!
  ) {
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

    wordOfTheDayImage: file(relativePath: { eq: $wordOfTheDayImage }) {
      childImageSharp {
        gatsbyImageData(
          width: 100
          height: 80
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    heroImage: file(relativePath: { eq: $heroImage }) {
      childImageSharp {
        gatsbyImageData(
          width: 270
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export const Head: HeadFC = ({ location }) => (
  <SEO title="Home" pathname={location.pathname} />
);
