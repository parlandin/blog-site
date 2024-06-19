import React from "react";
import { HeadFC, PageProps } from "gatsby";
import * as S from "@styles/404PageStyle";
import SEO from "@components/SEO";
import { StaticImage } from "gatsby-plugin-image";
import { pageTransitionIn } from "@src/animations/pagesTransition";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  location.state;

  return (
    <>
      <S.Container key={location.pathname} {...pageTransitionIn}>
        <S.Content>
          <S.ImageContainer>
            <StaticImage
              src="../images/young-clancy.png"
              alt="Page 404 not found. Ilustração young clancy,  by: covarche - tumblr: https://covarche.tumblr.com/post/617379446261940224/midnight-gospel-was-really-good. all credits to"
            />
          </S.ImageContainer>
          <S.Title>
            Você encontrou um lugar que nem eu tinha encontrado ainda, UAU!
          </S.Title>
          <S.Text>mas parece que não tem nada aqui ainda...</S.Text>

          <S.CustomLink to="/" title="Ir para o inicio">
            voltar para o inicio
          </S.CustomLink>
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
