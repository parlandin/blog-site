import React, { useState } from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";

const NewComment = () => {
  const [comment, setComment] = useState("");
  const [preview, setPreview] = useState<boolean>(false);

  const account = {
    isLogged: true,
    user: {
      userName: "Parlandim",
      avatar: "https://avatar.iran.liara.run/public/10",
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    const replaceString = value.replace(/\n\n/g, "\n<br>");

    setComment(replaceString);
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

        <S.UserSection>
          <S.UserInfos>
            {account.isLogged && (
              <>
                <S.Avatar src={account.user.avatar} />
                <S.UserName>{account.user.userName}</S.UserName>
              </>
            )}
          </S.UserInfos>
          <S.Button>{account.isLogged ? "comentar" : "fazer login"}</S.Button>
        </S.UserSection>
      </S.CommentSection>
    </S.Container>
  );
};

export default NewComment;
