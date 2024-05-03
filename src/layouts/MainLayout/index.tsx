import React from "react";
import * as S from "./styles";
import { GlobalStyle } from "./globalStyle";
import Header from "@components/Header";
import ThemeProvider from "@contexts/ThemeContext";
import ThemeWrapper from "@components/ThemeWrapper";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <ThemeWrapper>
          <GlobalStyle />
          <S.Container>
            <Header />
            <S.Main>{children}</S.Main>
          </S.Container>
        </ThemeWrapper>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
