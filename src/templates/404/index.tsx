import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import * as S from "@src/templates/404/404PageStyle";
import SEO from "@components/SEO";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { pageTransitionIn } from "@src/animations/pagesTransition";
import useEventTheme from "@src/hooks/useEventTheme";

const NotFoundPage: React.FC<PageProps<Queries.getImagemQuery>> = ({
  location,
  data,
}) => {
  location.state;

  //@ts-ignore
  const image = getImage(data.file) as IGatsbyImageData;

  const {
    eventTheme,
    eventTheme: { notFound },
  } = useEventTheme();

  return (
    <>
      <S.Container key={location.pathname} {...pageTransitionIn}>
        <S.Content>
          <S.ImageContainer>
            <GatsbyImage
              image={image}
              alt={notFound.alt}
              title={notFound.alt}
            />
          </S.ImageContainer>

          <S.ContentContainer className={`${eventTheme.name}`}>
            <S.Title>
              Você encontrou um lugar que nem eu tinha encontrado ainda, UAU!
            </S.Title>
            <S.Text>mas parece que não tem nada aqui ainda...</S.Text>

            <S.CustomLink to="/" title="Ir para o inicio">
              voltar para o inicio
            </S.CustomLink>
          </S.ContentContainer>
        </S.Content>
      </S.Container>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="404: Não encontrada"
    pathname={location.pathname}
    description="Essa página que você está tentado acessar não existe em nosso site"
  />
);

export const query = graphql`
  query getImagem($notFoundImage: String!) {
    file(relativePath: { eq: $notFoundImage }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
