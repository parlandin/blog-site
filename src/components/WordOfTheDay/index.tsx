import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";
import { Link } from "gatsby";
import useGetHomeData from "@src/api/useGetWordOfTheDayData";

const WordOfTheDay: React.FC = () => {
  const {
    loading,
    memoizedWordOfTheDay: { word },
  } = useGetHomeData();

  return (
    <S.Container>
      <S.Image>
        <StaticImage
          src="../../images/dog.png"
          alt=""
          placeholder="blurred"
          title="dog que representa a palavra do dia"
          width={100}
          height={80}
        />
      </S.Image>

      <S.Ballon>
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
