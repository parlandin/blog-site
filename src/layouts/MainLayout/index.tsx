import React from "react";
import * as S from "./styles";
import { GlobalStyle } from "./globalStyle";
import Header from "@components/Header";
import { HeadFC } from "gatsby";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <Header />
        <S.Main>{children}</S.Main>
      </S.Container>
      ;
    </>
  );
};

export default MainLayout;

export const Head: HeadFC = () => {
  return (
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Marck+Script&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </head>
  );
};
