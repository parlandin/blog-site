import React from "react";
import * as S from "./styles";
import { Link } from "gatsby";
import User from "@components/Icons/User";
import Paint from "@components/Icons/Paint";
import Code from "@components/Icons/Code";
import Mail from "@components/Icons/Mail";
import Star from "@components/Icons/Star";

interface DropUpMenuProps {
  showMoreOptions: boolean;
}

const listOfItems = [
  {
    name: "Sobre",
    link: "/about",
    icon: User,
  },
  {
    name: "Desenhos",
    link: "/drawings",
    icon: Paint,
  },
  {
    name: "Games",
    link: "/games-dev",
    icon: Code,
  },
  {
    name: "Contato",
    link: "/contact",
    icon: Mail,
  },
  {
    // menção honrosa
    name: "Menção",
    link: "/mentions",
    icon: Star,
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
              {item.icon && <item.icon />}

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
