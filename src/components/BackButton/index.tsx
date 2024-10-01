import React from "react";
import * as S from "./styles";
import ArrowLeft from "@components/Icons/ArrowLeft";

interface BackButtonProps {
  onClick?: () => void;
  alt?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, alt }) => {
  return (
    <S.Button onClick={onClick} title={`voltar`}>
      <ArrowLeft />
      <span>Voltar</span>
    </S.Button>
  );
};

export default BackButton;
