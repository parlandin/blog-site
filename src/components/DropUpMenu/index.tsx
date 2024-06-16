import React from "react";
import * as S from "./styles";
import { Link } from "gatsby";

interface DropUpMenuProps {
  showMoreOptions: boolean;
}

const listOfItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Coffer",
    link: "/coffer",
  },
  {
    name: "Search",
    link: "/search",
  },
];

const DropUpMenu: React.FC<DropUpMenuProps> = ({ showMoreOptions }) => {
  return (
    <>
      <S.Backdrop $showMoreOptions={showMoreOptions} />

      <S.Container $showMoreOptions={showMoreOptions}>
        <S.ListMenu>
          {listOfItems.map((item) => (
            <S.MenuItem key={item.name}>
              <Link to={item.link} title={item.name}>
                {item.name}
              </Link>
            </S.MenuItem>
          ))}
        </S.ListMenu>
      </S.Container>
    </>
  );
};

export default DropUpMenu;
