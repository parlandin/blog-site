import React from "react";
import * as S from "./styles";
import { GlobalStyle } from "./globalStyle";
import Header from "@components/Header";
import { Background } from "./background";
import MenuMobile from "@components/MenuMobile";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageProps } from "gatsby";

const MainLayout: React.FC<PageProps> = ({ children, location }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        <GlobalStyle />
        <Background />
        <div className="background"></div>

        <S.Container>
          <Header />

          <S.Main>{children}</S.Main>

          <Footer />

          <S.MenuMobileWrapper>
            <MenuMobile />
          </S.MenuMobileWrapper>
        </S.Container>
      </AnimatePresence>
    </>
  );
};

export default MainLayout;
