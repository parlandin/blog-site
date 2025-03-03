import React from "react";
import { useTheme } from "styled-components";
import * as S from "./styles";
import NewComment from "@components/NewComment";
import CommentsList from "@components/CommentsList";

const Comments = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <NewComment />
      <CommentsList />
      {/*  <div>
        <Giscus
          repo="parlandin/parlan-blog-comments"
          repoId="R_kgDOMLndrw"
          category="General"
          categoryId="DIC_kwDOMLndr84CgNMn"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={
            theme.name === "light" ? "light_high_contrast" : "transparent_dark"
          }
          lang="pt"
          loading="lazy"
        />
      </div> */}
    </S.Container>
  );
};

export default Comments;
