import { PageProps, HeadFC } from "gatsby";
import React, { useEffect } from "react";
import * as S from "@styles/word-dayStyles";
import useGetHomeData from "@src/api/useGetWordOfTheDayData";
import Title from "@components/Title";
import SEO from "@components/SEO";
import useNotificationPermission from "@hooks/useNotificationPermission";
import useRemoveNotification from "@hooks/useRemoveNotification";
import toast from "react-hot-toast";

const WordOfTheDay: React.FC<PageProps> = () => {
  const {
    loading,
    memoizedWordOfTheDay: { word, credits, date, etimology, meanings, sub },
  } = useGetHomeData();

  const { requestPermission } = useNotificationPermission();
  const { disableNotifications } = useRemoveNotification();

  useEffect(() => {
    if (!loading) {
      toast.dismiss("loading");
    } else {
      toast.loading("Carregando...", {
        duration: 20000000,
        id: "loading",
      });
    }
  }, [loading]);

  const notify = () => {
    toast.success("Notificação enviada");
  };

  return (
    <S.Container>
      {!loading && (
        <>
          <Title fontWeigth="600">
            Palavra do dia: "<span>{word}</span>"
          </Title>
          <S.SubTitle>O que é a palavra do dia?</S.SubTitle>
          <p>
            A palavra do dia é uma palavra escolhida aleatoriamente que tem um
            significado interessante. O desafio é tentar usar essa palavra no
            seu dia a dia e expandir o seu vocabulário.
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

          <S.SubTitle>
            Deseja receber notificações da palavra do dia?
          </S.SubTitle>
          <p>Clique no botão abaixo para habilitar notificações</p>

          <div>
            <br />
            <button onClick={requestPermission}>ativar notificações</button>
            <br />
            <br />
            <button onClick={disableNotifications}>Desativar</button>
            <br />
            <button onClick={notify}>Notify</button>
            <br />
          </div>
        </>
      )}
    </S.Container>
  );
};

export const Head: HeadFC = ({ location }) => {
  return <SEO pathname={location.pathname} title="Palavra do dia" />;
};

export default WordOfTheDay;
