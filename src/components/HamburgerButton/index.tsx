import React from "react";
import * as S from "./styles";

interface HamburgerButtonProps {
  onClick?: () => void;
  name: string;
  title?: string;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onClick,
  name,
  title,
}) => {
  return (
    <S.Label htmlFor={name} onClick={onClick} title={title}>
      <S.Input type="checkbox" id={name} />
      <S.Span></S.Span>
      <S.Span></S.Span>
      <S.Span></S.Span>
    </S.Label>
  );
};

export default HamburgerButton;
