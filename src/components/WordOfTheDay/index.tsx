import React from "react";
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as S from "./styles";
import { Link } from "gatsby";
import useGetHomeData from "@api/useGetWordOfTheDayData";
import useEventTheme from "@src/hooks/useEventTheme";

type WordOfTheDayProps = {
  image: any;
};

const WordOfTheDay: React.FC<WordOfTheDayProps> = ({ image }) => {
  const wordImage = getImage(image) as IGatsbyImageData;
  const { eventThemeName } = useEventTheme();

  const {
    loading,
    memoizedWordOfTheDay: { word },
  } = useGetHomeData();

  return (
    <S.Container>
      <S.Image>
        <GatsbyImage
          image={wordImage}
          alt="dog que representa a palavra do dia"
          title="dog que representa a palavra do dia"
        />
      </S.Image>

      <S.Ballon className={`${eventThemeName}`}>
        <div>
          <S.text>Palavra do dia:</S.text>
          <S.word>{loading ? "Quase lá..." : word}</S.word>
        </div>

        <Link to="/word-day" title="ver definição"></Link>
      </S.Ballon>
    </S.Container>
  );
};

export default WordOfTheDay;
