import { PageProps, HeadFC } from "gatsby";
import React from "react";
import * as S from "@styles/word-dayStyles";
import useGetHomeData from "@src/api/useGetWordOfTheDayData";
import Title from "@components/Title";
import SEO from "@components/SEO";
import useNotificationPermission from "@hooks/useNotificationPermission";

const WordOfTheDay: React.FC<PageProps> = () => {
  const { word, credits, date, etimology, meanings, sub } = useGetHomeData();

  const { permission, requestPermission } = useNotificationPermission();

  return (
    <S.Container>
      <Title fontWeigth="600">
        Palavra do dia: "<span>{word}</span>"
      </Title>
      <S.SubTitle>O que é a palavra do dia?</S.SubTitle>
      <p>
        A palavra do dia é uma palavra escolhida aleatoriamente que tem um
        significado interessante. O desafio é tentar usar essa palavra no seu
        dia a dia e expandir o seu vocabulário.
      </p>

      <S.SubTitle>
        Sobre a palavra <span>{word}</span>
      </S.SubTitle>
      <span className="sub">{sub}</span>

      <S.ContentTitle>Significados:</S.ContentTitle>

      {meanings.map((meaning, index) => (
        <S.Meaning key={index}>
          <p>{meaning}</p>
        </S.Meaning>
      ))}

      <S.ContentTitle>Etimologia:</S.ContentTitle>

      <S.Etimology>{etimology}</S.Etimology>

      <S.Extra>
        <span> Atualizado em: {date}</span>
        <span>{credits}</span>
      </S.Extra>

      <S.SubTitle>Deseja receber notificações da palavra do dia?</S.SubTitle>
      <p>Clique no botão abaixo para habilitar notificações</p>
      <button onClick={requestPermission}>ativar </button>
    </S.Container>
  );
};

export const Head: HeadFC = ({ location }) => {
  return <SEO pathname={location.pathname} title="Palavra do dia" />;
};

export default WordOfTheDay;
