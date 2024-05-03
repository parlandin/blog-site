import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import HomeHero from "@components/HomeHero";
import * as S from "@styles/homeStyles";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <HomeHero />
      <S.Container>
        <Title>Postagens recente</Title>
      </S.Container>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <head>
      <title>Home Page </title>;
      <meta name="description" content="Home Page" />;
    </head>
  );
};
