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
        <S.ListItens>
          <S.StyledLink
            to="/"
            title="Home"
            activeClassName="active"
            className="only-desktop"
          >
            <HomeIcon />
            <p>Home</p>
          </S.StyledLink>
        </S.ListItens>

        <S.ListItens>
          <S.StyledLink
            to="/blog"
            title="Blog"
            activeClassName="active"
            className="only-desktop"
            partiallyActive={true}
          >
            <Feather />
            <p>Blog</p>
          </S.StyledLink>
        </S.ListItens>

        <S.ListItens>
          <S.StyledLink
            to="/portfolio"
            title="Portfólio"
            activeClassName="active"
            className="only-desktop"
            partiallyActive={true}
          >
            <Coffer />
            <p>Portfólio</p>
          </S.StyledLink>
        </S.ListItens>

        <S.ListItens>
          <S.StyledLink
            to="/search"
            title="Buscar"
            activeClassName="active"
            className="only-desktop"
            partiallyActive={true}
          >
            <SearchIcon />
            <p>Buscar</p>
          </S.StyledLink>
        </S.ListItens>

        <S.MenuItem>
          <ToggleButton />
        </S.MenuItem>

        {/* <S.MenuItem className="only-desktop">
          <HomeIcon />
          <p>Home</p>
          <Link to="/" title="Home" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <Feather />
          <p>Blog</p>
          <Link to="/blog" title="Blog" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <Coffer />
          <p>Portfólio</p>
          <Link to="/portfolio" title="Portfólio" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem className="only-desktop">
          <SearchIcon />
          <p>Buscar</p>
          <Link to="/search" title="Buscar" activeClassName="active" />
        </S.MenuItem>

        <S.MenuItem>
          <ToggleButton />
        </S.MenuItem> */}
      </ul>
    </S.Menu>
  );
};

export default Menu;
