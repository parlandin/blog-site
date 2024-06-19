import React from "react";
import * as S from "./styles";
import User from "@components/Icons/User";
import Paint from "@components/Icons/Paint";
import Code from "@components/Icons/Code";
import Mail from "@components/Icons/Mail";
import Star from "@components/Icons/Star";
import Github from "@components/Icons/Github";
import LinkedIn from "@components/Icons/LinkedIn";
import { Link } from "gatsby";

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

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.MenuSection>
        <S.Menu>
          {listOfItems.map((item) => (
            <S.MenuItem key={item.name}>
              <item.icon />
              <span>{item.name}</span>
              <Link to={item.link} title={`ir para ${item.name}`} />
            </S.MenuItem>
          ))}
        </S.Menu>

        <S.SocialMedia>
          <a
            href="https://github.com/parlandin"
            target="_blank"
            rel="noopener noreferrer"
            title="ir para meu github"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/gustavoparlandim/"
            target="_blank"
            rel="noopener noreferrer"
            title="ir para meu linkedIn"
          >
            <LinkedIn />
          </a>
        </S.SocialMedia>
      </S.MenuSection>

      <S.HorizontalLine />

      <S.CopyRight>
        <p>&copy; {new Date().getFullYear()} | parlandim</p>
        <p>
          Esse site está sobra a licença{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
          >
            CC BY-SA 4.0
          </a>
        </p>
      </S.CopyRight>
    </S.Container>
  );
};

export default Footer;
