import { PageProps, HeadFC } from "gatsby";
import React, { useEffect } from "react";
import * as S from "@styles/word-dayStyles";
import useGetHomeData from "@src/api/useGetWordOfTheDayData";
import Title from "@components/Title";
import SEO from "@components/SEO";
import useNotificationPermission from "@hooks/useNotificationPermission";
import useRemoveNotification from "@hooks/useRemoveNotification";
import BellIcon from "@components/Icons/Bell";
import BellOffIcon from "@components/Icons/BellOff";
import useToast from "@src/hooks/useToast";
import { pageTransitionIn } from "@animations/pagesTransition";
import BackButton from "@components/BackButton";
import useNavigateBack from "@src/hooks/useNavigateBack";
import useEventTheme from "@src/hooks/useEventTheme";
import { StaticImage } from "gatsby-plugin-image";

const WordOfTheDay: React.FC<PageProps> = ({ location }) => {
  const toast = useToast();

  const {
    loading,
    memoizedWordOfTheDay: { word, credits, date, etimology, meanings, sub },
  } = useGetHomeData();

  const { requestPermission } = useNotificationPermission();
  const { disableNotifications } = useRemoveNotification();
  const { navigateToBack } = useNavigateBack({ fullPath: location.pathname });
  const { eventThemeName, isEventActive } = useEventTheme();

  useEffect(() => {
    if (loading) {
      toast.loading("Carregando...", {
        persist: true,
        key: "loading-key",
      });
    } else {
      toast.dismiss("loading-key");
    }
  }, [loading]);

  return (
    <S.Container>
      {!loading && (
        <>
          <S.MotionContainer
            key={location.pathname}
            {...pageTransitionIn}
            className={`${eventThemeName}`}
          >
            {eventThemeName === "halloween" && isEventActive && (
              <S.OwlIcon>
                <StaticImage
                  src="../images/owl.svg"
                  alt="Halloween"
                  placeholder="blurred"
                  layout="constrained"
                  width={120}
                  height={120}
                />
              </S.OwlIcon>
            )}

            <BackButton onClick={navigateToBack} />

            <Title $fontWeight="600">
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

            <S.NotificationWrapper>
              <S.NotificationButton
                type="button"
                title="Ativar as notificações"
                onClick={requestPermission}
              >
                <BellIcon />
                ativar notificações
              </S.NotificationButton>

              <S.NotificationButton
                type="button"
                title="Desativar as notificações"
                onClick={disableNotifications}
              >
                <BellOffIcon />
                Desativar notificações
              </S.NotificationButton>
            </S.NotificationWrapper>
          </S.MotionContainer>
        </>
      )}
    </S.Container>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO pathname={location.pathname} title="Palavra do dia" />
);

export default WordOfTheDay;
