import exp from "constants";
import * as S from "./styles";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size?: string;
  position?: string;
  margin?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = "2rem",
  position = "left",
  margin = "",
}) => {
  return (
    <S.Title fontSize={size} position={position} margin={margin}>
      {children}
    </S.Title>
  );
};

export default Title;
