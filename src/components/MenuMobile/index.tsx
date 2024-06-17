import React, { useState } from "react";
import * as S from "./styles";
import HomeIcon from "@components/Icons/Home";
import SearchIcon from "@components/Icons/Search";
import Feather from "@components/Icons/Feather";
import Coffer from "@components/Icons/Coffer";
import { Link } from "gatsby";
import ArrowUp from "@components/Icons/ArrowUp";
import HamburgerButton from "@components/HamburgerButton";
import DropUpMenu from "@components/DropUpMenu";

const MenuMobile: React.FC = () => {
  //temporary solution to show the top button
  const [showTopButton, setShowTopButton] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const toggleMoreOptions = () => {
    setShowMoreOptions((prevState) => !prevState);
  };

  //temporary solution to show the top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <S.MenuMobile>
      <DropUpMenu showMoreOptions={showMoreOptions} />
      <S.MenuList>
        {/* temporary solution to show the top button */}
        {showTopButton ? (
          <S.MenuItem onClick={toTop} className="no-top">
            <ArrowUp />
            <p>Topo</p>
          </S.MenuItem>
        ) : (
          <S.MenuItem>
            <HomeIcon />
            <p>Home</p>
            <Link to="/" title="Home" />
          </S.MenuItem>
        )}
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

        <S.MenuItem>
          <S.HamburgerButton type="button" title="Ver mais itens do menu">
            <HamburgerButton
              title="Ver mais itens do menu"
              name="more-options-menu"
              onClick={toggleMoreOptions}
            />
          </S.HamburgerButton>
        </S.MenuItem>
      </S.MenuList>
    </S.MenuMobile>
  );
};

export default MenuMobile;
