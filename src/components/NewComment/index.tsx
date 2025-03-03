import React, { useState } from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";

const NewComment = () => {
  const [comment, setComment] = useState("");
  const [preview, setPreview] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  return (
    <S.Container>
      <S.CommentSection>
        <S.ButtonsWrapper>
          <S.Button onClick={handlePreview}>
            {preview ? "Escrever" : "Pré visualizar"}
          </S.Button>
        </S.ButtonsWrapper>

        {!preview && (
          <S.CommentInput
            placeholder="Deixe seu comentário..."
            value={comment}
            onChange={handleChange}
          />
        )}

        {preview && (
          <S.Preview>
            <ViewMarkdown content={comment} />
          </S.Preview>
        )}
      </S.CommentSection>
    </S.Container>
  );
};

export default NewComment;
