import React, { useState } from "react";
import * as S from "./styles";

interface SpoilerTagProps {
  children: React.ReactNode;
  type?: "text" | "image";
}

const SpoilerTag: React.FC<SpoilerTagProps> = ({ children, type = "text" }) => {
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

  return (
    <S.ContainerSpoiler
      className={`${isSpoilerVisible ? "show" : "hide"} ${type}`}
    >
      <S.SpoilerButton
        onClick={() => setIsSpoilerVisible(!isSpoilerVisible)}
        title="mostrar spoiler"
      ></S.SpoilerButton>
      {children}
    </S.ContainerSpoiler>
  );
};

export default SpoilerTag;
