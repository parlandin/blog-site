import React from "react";
import * as S from "./styles";
import { navigate } from "gatsby";
import ArrowLeft from "@components/Icons/ArrowLeft";

const BackButton: React.FC = () => {
  return (
    <S.Button onClick={() => navigate(-1)}>
      <ArrowLeft />
      <span>Voltar</span>
    </S.Button>
  );
};

export default BackButton;
