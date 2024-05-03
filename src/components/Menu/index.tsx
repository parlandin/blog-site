import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import * as S from "./styles";
import HomeIcon from "@components/Icons/Home";
import SearchIcon from "@components/Icons/Search";
import EreaderIcon from "@components/Icons/Ereader";
import GhostIcon from "@components/Icons/Ghost";
import ToggleButton from "@components/ToggleButton";

const Menu: React.FC = () => {
  return (
    <S.Menu>
      <ul>
        <S.MenuItem>
          <HomeIcon />
          <p>Home</p>
          <Link to="/" title="Home" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem>
          <EreaderIcon />
          <p>Blog</p>
          <Link to="/blog" title="Blog" />
        </S.MenuItem>

        <S.MenuItem>
          <GhostIcon />
          <p>Portfólio</p>
          <Link to="/portfolio" title="Portfólio" />
        </S.MenuItem>

        <S.MenuItem>
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
