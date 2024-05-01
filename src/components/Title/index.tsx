import exp from "constants";
import * as S from "./styles";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
