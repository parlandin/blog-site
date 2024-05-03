import React from "react";
import * as S from "./styles";
import Menu from "@components/Menu";
import { useFixedHeader } from "../../hooks/useFixedHeader";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  const { isFixed, headerRef } = useFixedHeader();

  return (
    <S.Header ref={headerRef} className={isFixed ? "full" : "null"}>
      <S.Logo to="/" title="ir para o inicio">
        <StaticImage src="../../images/icon.png" alt="Logo" />

        <p>parlan&lt;dev&gt;</p>
      </S.Logo>

      <Menu />
    </S.Header>
  );
};

export default Header;
