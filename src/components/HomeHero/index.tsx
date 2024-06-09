import React, { memo } from "react";
import * as S from "./styles";
import { StaticImage } from "gatsby-plugin-image";
import { quotes } from "./quotes";

const HomeHero: React.FC = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <S.Container>
      <S.Content>
        <S.ContextText>
          Seja bem-vindo ao meu <span>Space Blog</span>, um espaço para
          compartilhar um pouco sobre meus pensamentos, hobbies e conhecimentos.
          Pegue seu café, seu fone e venha ler, escutar e aprender."
        </S.ContextText>

        <S.DayQuote>
          <p>
            "{randomQuote.frase}" - {randomQuote.autor}
          </p>
        </S.DayQuote>
      </S.Content>
      <S.Image>
        <StaticImage
          src="../../images/home-hero.png"
          alt="personagem de midnight gospel: clancy, usada como hero imagem em parlandim blog. imagem de behance: k1ri- Nicolas Akerman (https://www.behance.net/k1ri)"
          placeholder="blurred"
          title="personagem de midnight gospel: clancy, usada como hero imagem em parlandim blog. imagem de behance: k1ri- Nicolas Akerman (https://www.behance.net/k1ri)"
        />
      </S.Image>
    </S.Container>
  );
};

export default memo(HomeHero);
