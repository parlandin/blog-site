import React, { useState, useMemo, useCallback, useEffect } from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";

export interface ICommentCreate {
  isReplying?: boolean;
  isReplyOverReply?: boolean;
  replyId?: number;
  replyUser?: string;
}

const CommentCreate: React.FC<ICommentCreate> = ({
  isReplying = false,
  isReplyOverReply = false,
  replyId,
  replyUser,
}) => {
  const [comment, setComment] = useState("");
  const [preview, setPreview] = useState<boolean>(false);

  const account = useMemo(
    () => ({
      isLogged: true,
      user: {
        userName: "Parlandim",
        avatar: "https://avatar.iran.liara.run/public/10",
      },
    }),
    []
  );

  const clearComment = useCallback(() => {
    setComment("");
  }, []);

  const withMention = useCallback(
    (content: string) => {
      if (!isReplyOverReply) {
        return content;
      }

      if (content.includes(`@${replyUser}`)) {
        return content;
      }

      return `@${replyUser}\n${content}`;
    },
    [isReplying, replyUser, isReplyOverReply]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      const replaceString = value.replace(/\n\n/g, "\n<br>");
      setComment(withMention(replaceString));
    },
    [withMention]
  );

  const handlePreview = useCallback(() => {
    setPreview((prev) => !prev);
  }, []);

  const userSection = useMemo(
    () => (
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
    ),
    [account]
  );

  return (
    <S.Container>
      <S.CommentSection>
        <S.ButtonsWrapper>
          <S.Button onClick={handlePreview}>
            {preview ? "Escrever" : "Pré visualizar"}
          </S.Button>

          {isReplying && <S.ReplyText>Respondendo a @{replyUser}</S.ReplyText>}
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

        {userSection}
      </S.CommentSection>
    </S.Container>
  );
};

export default CommentCreate;
