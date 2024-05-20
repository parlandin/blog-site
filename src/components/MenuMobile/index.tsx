import React from "react";
import * as S from "./styles";
import HomeIcon from "@components/Icons/Home";
import SearchIcon from "@components/Icons/Search";
import Feather from "@components/Icons/Feather";
import Coffer from "@components/Icons/Coffer";
import { Link } from "gatsby";

const MenuMobile: React.FC = () => {
  return (
    <S.MenuMobile>
      <S.MenuList>
        <S.MenuItem>
          <HomeIcon />
          <p>Home</p>
          <Link to="/" title="Home" />
        </S.MenuItem>

        <S.MenuItem>
          <Feather />
          <p>Blog</p>
          <Link to="/blog" title="Blog" />
        </S.MenuItem>

        <S.MenuItem>
          <Coffer />
          <p>Portfólio</p>
          <Link to="/portfolio" title="Portfólio" />
        </S.MenuItem>

        <S.MenuItem>
          <SearchIcon />
          <p>Buscar</p>
          <Link to="/search" title="Buscar" />
        </S.MenuItem>
      </S.MenuList>
    </S.MenuMobile>
  );
};

export default MenuMobile;
