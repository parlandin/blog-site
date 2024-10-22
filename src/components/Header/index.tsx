import React from "react";
import * as S from "./styles";
import Menu from "@components/Menu";
import { useFixedHeader } from "../../hooks/useFixedHeader";
import { StaticImage } from "gatsby-plugin-image";
import useEventTheme from "@src/hooks/useEventTheme";

const Header: React.FC = () => {
  const { isFixed, headerRef } = useFixedHeader();

  const { eventThemeName } = useEventTheme();

  return (
    <S.Header
      ref={headerRef}
      className={`${isFixed ? "full" : "null"} ${eventThemeName}`}
    >
      <S.Logo to="/" title="ir para o inicio">
        <StaticImage src="../../images/icon-halloween.png" alt="Logo" />

        <p>parlan&lt;dev&gt;</p>
      </S.Logo>

      <Menu />
    </S.Header>
  );
};

export default Header;
