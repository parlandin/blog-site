import React, { memo, useMemo } from "react";
import * as S from "./styles";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { quotes } from "./quotes";
import { halloweenQuotes } from "./halloweenQuotes";
import randomQuotes from "@utils/randomQuotes";
import useEventTheme from "@hooks/useEventTheme";

type HomeHeroProps = {
  image: any;
};

const HomeHero: React.FC<HomeHeroProps> = ({ image }) => {
  const heroImg = getImage(image) as IGatsbyImageData;

  //TODO: move this to a  hook
  const { eventThemeName, isEventActive } = useEventTheme() as {
    eventThemeName: "halloween" | "default";
    isEventActive: boolean;
  };

  const getQuote = () => {
    const quotesList = {
      halloween: halloweenQuotes,
      default: quotes,
    };

    if (isEventActive) {
      return randomQuotes(quotesList[eventThemeName]);
    }

    return randomQuotes(quotesList.default);
  };

  const quote = useMemo(() => getQuote(), [isEventActive, eventThemeName]);

  return (
    <S.Container>
      <S.Content className={`${eventThemeName}`}>
        <S.ContextText className={`${eventThemeName}`}>
          Seja bem-vindo ao meu <span>Space Blog</span>, um espaço para
          compartilhar um pouco sobre meus pensamentos, hobbies e conhecimentos.
          Pegue seu café, seu fone e venha ler, escutar e aprender."
        </S.ContextText>

        <S.DayQuote>
          <p>
            "{quote.frase}" - {quote.autor}
          </p>
        </S.DayQuote>
      </S.Content>
      <S.Image>
        <GatsbyImage image={heroImg} alt={""} title={""} />
      </S.Image>
    </S.Container>
  );
};

export default memo(HomeHero);
