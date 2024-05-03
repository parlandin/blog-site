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
