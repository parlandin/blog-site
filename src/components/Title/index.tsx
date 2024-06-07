import exp from "constants";
import * as S from "./styles";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  size?: string;
  position?: string;
  margin?: string;
  fontWeigth?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  size = "2rem",
  position = "left",
  margin = "",
  fontWeigth,
}) => {
  return (
    <S.Title
      fontSize={size}
      position={position}
      margin={margin}
      fontWeigth={fontWeigth}
    >
      {children}
    </S.Title>
  );
};

export default Title;
