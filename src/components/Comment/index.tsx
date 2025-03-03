import React, { useCallback } from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";
import Heart from "@components/Icons/Heart";
import NewComment from "@components/NewComment";

export interface ICommentData {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  comment: string;
  likes: number;
  reply?: ICommentData[];
}

export interface IComment {
  listComment: ICommentData;
  children?: React.ReactNode;
  currentUser: string;
  isReplying?: boolean;
  handleReply?: (id: number) => void;
  replyComment?: {
    id: number;
    isReplying: boolean;
  };
}

const Comment: React.FC<IComment> = ({
  currentUser = "",
  children,
  listComment,
  isReplying = false,
  handleReply = () => {},
  replyComment,
}) => {
  const userMention = useCallback(
    (content: string) => {
      const newContent = content.replace(
        `@${currentUser}`,
        `<span className="mention">@${currentUser}</span>`
      );

      return newContent;
    },
    [currentUser]
  );

  return (
    <>
      <S.CommentContainer
        key={listComment.id}
        className={isReplying ? "reply" : ""}
      >
        <S.Avatar
          src={listComment.user.avatar}
          alt={`${listComment.user.avatar} avatar`}
          className={isReplying ? "reply" : ""}
        />

        <S.CommentInfos>
          <S.CommentTitle>
            <S.UserName>{listComment.user.name}</S.UserName>
            <S.Separator />
            <S.Date>22/01/2024</S.Date>
          </S.CommentTitle>

          <S.Comment>
            <ViewMarkdown content={userMention(listComment.comment)} />
          </S.Comment>

          <S.ExtraInfo>
            <S.LikeButton>
              <Heart />
              <span>{listComment.likes}</span>
            </S.LikeButton>

            <S.ReplyButton onClick={() => handleReply(listComment.id)}>
              Responder
            </S.ReplyButton>
          </S.ExtraInfo>

          {listComment.reply && listComment.reply.length > 0 && (
            <S.ReplyCount>{listComment.reply?.length} respostas</S.ReplyCount>
          )}

          {replyComment?.isReplying && replyComment.id === listComment.id && (
            <NewComment />
          )}
          <S.ReplyContainer>{children}</S.ReplyContainer>
        </S.CommentInfos>
      </S.CommentContainer>
    </>
  );
};

export default Comment;
