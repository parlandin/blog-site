import React from "react";
import * as S from "./styles";
import { GlobalStyle } from "./globalStyle";
import Header from "@components/Header";
import { Background } from "./background";
import MenuMobile from "@components/MenuMobile";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";
import { PageProps } from "gatsby";
import { useScreenDetector } from "@src/hooks/useScreenDetector";

const MainLayout: React.FC<PageProps> = ({ children, location }) => {
  const { isMobile } = useScreenDetector();

  return (
    <>
      <GlobalStyle key="global-style" />
      <Background />
      <div className="background"></div>

      <AnimatePresence
        mode="popLayout"
        initial={isMobile ? false : true}
        presenceAffectsLayout
        key={location.pathname}
      >
        <S.Container key="container">
          <Header key="header" />

          <S.Main key="main">{children}</S.Main>

          <Footer key="footer" />
        </S.Container>
      </AnimatePresence>

      <S.MenuMobileWrapper key="menu-mobile">
        <MenuMobile />
      </S.MenuMobileWrapper>
    </>
  );
};

export default MainLayout;
