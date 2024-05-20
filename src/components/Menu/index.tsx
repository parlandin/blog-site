import React from "react";
import { Link } from "gatsby";
import * as S from "./styles";
import HomeIcon from "@components/Icons/Home";
import SearchIcon from "@components/Icons/Search";
import ToggleButton from "@components/ToggleButton";
import Feather from "@components/Icons/Feather";
import Coffer from "@components/Icons/Coffer";

const Menu: React.FC = () => {
  return (
    <S.Menu>
      <ul>
        <S.MenuItem className="only-desktop">
          <HomeIcon />
          <p>Home</p>
          <Link to="/" title="Home" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <Feather />
          <p>Blog</p>
          <Link to="/blog" title="Blog" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <Coffer />
          <p>Portfólio</p>
          <Link to="/portfolio" title="Portfólio" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <SearchIcon />
          <p>Buscar</p>
          <Link to="/search" title="Buscar" />
        </S.MenuItem>

        <S.MenuItem>
          <ToggleButton />
        </S.MenuItem>
      </ul>
    </S.Menu>
  );
};

export default Menu;
