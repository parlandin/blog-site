import exp from "constants";
import * as S from "./styles";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size?: string;
  position?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = "2rem",
  position = "left",
}) => {
  return (
    <S.Title fontSize={size} position={position}>
      {children}
    </S.Title>
  );
};

export default Title;
