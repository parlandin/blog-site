import React from "react";
import * as S from "./styles";
import { GlobalStyle } from "./globalStyle";
import Header from "@components/Header";
import { Background } from "./background";
import MenuMobile from "@components/MenuMobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Background />
      <div className="background"></div>
      <S.Container>
        <Header />
        <MenuMobile />
        <S.Main>{children}</S.Main>
      </S.Container>
    </>
  );
};

export default MainLayout;
