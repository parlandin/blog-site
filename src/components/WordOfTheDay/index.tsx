import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";
import { Link } from "gatsby";

const WordOfTheDay = () => {
  return (
    <S.Container>
      <S.Image>
        <StaticImage
          src="../../images/dog.png"
          alt=""
          placeholder="blurred"
          title="i"
          width={100}
          height={80}
        />
      </S.Image>

      <S.Ballon>
        <div>
          <S.text>Palavra do dia:</S.text>
          <S.word>Paralelepípedo</S.word>
        </div>

        <Link to="/word-day" title="ver definição"></Link>
      </S.Ballon>
    </S.Container>
  );
};

export default WordOfTheDay;
