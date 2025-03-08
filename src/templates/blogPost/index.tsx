import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import MDXWrapper from "@layouts/MDXWrapper";
import * as S from "./styles";
import { formatDate } from "@utils/formatDate";
import SEO from "@components/SEO";
import { pageTransitionIn } from "@animations/pagesTransition";
import BackButton from "@components/BackButton";
import useNavigateBack from "@src/hooks/useNavigateBack";
import useEventTheme from "@src/hooks/useEventTheme";
import CoffeeButton from "@components/CoffeButton";
/* import Comments from "@components/CommentSystem"; */

const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  location,
  children,
}) => {
  const { navigateToBack } = useNavigateBack({ fullPath: location.pathname });
  const date = formatDate(data.mdx?.frontmatter?.date || "");
  const { eventThemeName } = useEventTheme();

  return (
    <>
      <S.Container
        key={location.pathname}
        {...pageTransitionIn}
        className={`${eventThemeName}`}
      >
        <S.Parchment>
          <div className={`${eventThemeName}`}></div>
          <svg>
            <filter id="wavy2">
              <feTurbulence
                x="0"
                y="0"
                baseFrequency="0.02"
                numOctaves="5"
                seed="1"
              ></feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="20" />
            </filter>
          </svg>
        </S.Parchment>

        <S.BackButtonWrapper>
          <BackButton onClick={navigateToBack} />
        </S.BackButtonWrapper>
        <Title className={`${eventThemeName} black`} margin="0 0 15px">
          {data.mdx?.frontmatter?.title}
        </Title>
        <S.DateText className={`${eventThemeName}`}>
          Postado em: {date}
        </S.DateText>

        <MDXWrapper>{children}</MDXWrapper>

        {/*  <S.Line /> */}
        <CoffeeButton />
        {/*   <Comments /> */}
      </S.Container>
    </>
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
