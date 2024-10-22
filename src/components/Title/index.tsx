import * as S from "./styles";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size?: string;
  position?: string;
  margin?: string;
  $fontWeight?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = "2rem",
  position = "left",
  margin = "",
  $fontWeight,
  ...pros
}) => {
  return (
    <S.Title
      $fontSize={size}
      $position={position}
      $margin={margin}
      $fontWeight={$fontWeight}
      {...pros}
    >
      {children}
    </S.Title>
  );
};

export default Title;
