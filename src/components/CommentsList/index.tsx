import React, { useCallback } from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";
import Heart from "@components/Icons/Heart";
import NewComment from "@components/NewComment";
import { list } from "./list";

const CommentsList: React.FC = () => {
  const currentUser = "Parlandim";

  const [replyComment, setReplyComment] = React.useState({
    id: 1,
    isReplying: false,
  });

  const handleReply = useCallback(
    (id: number) => {
      const isReplying = replyComment.isReplying && replyComment.id === id;
      setReplyComment({ id, isReplying: !isReplying });
    },
    [replyComment]
  );

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
    <S.Container>
      {list.map((item) => (
        <S.CommentContainer key={item.id}>
          <S.Avatar src={item.user.avatar} alt={`${item.user.avatar} avatar`} />

          <S.CommentInfos>
            <S.CommentTitle>
              <S.UserName>{item.user.name}</S.UserName>
              <S.Separator />
              <S.Date>22/01/2024</S.Date>
            </S.CommentTitle>

            <S.Comment>
              <ViewMarkdown content={item.comment} />
            </S.Comment>

            <S.ExtraInfo>
              <S.LikeButton>
                <Heart />
                <span>{item.likes}</span>
              </S.LikeButton>

              <S.ReplyButton onClick={() => handleReply(item.id)}>
                Responder
              </S.ReplyButton>
            </S.ExtraInfo>

            {item.reply?.length > 0 && (
              <S.ReplyCount>{item.reply?.length} respostas</S.ReplyCount>
            )}

            {replyComment.isReplying && replyComment.id === item.id && (
              <NewComment />
            )}
            <S.ReplyContainer>
              {item.reply &&
                item.reply.map((reply) => (
                  <S.CommentContainer key={reply.id} className="reply">
                    <S.Avatar
                      src={reply.user.avatar}
                      alt={`${reply.user.avatar} avatar`}
                      className="reply"
                    />

                    <S.CommentInfos>
                      <S.CommentTitle>
                        <S.UserName>{item.user.name}</S.UserName>
                        <S.Separator />
                        <S.Date>2 hours ago</S.Date>
                      </S.CommentTitle>

                      <S.Comment>
                        <ViewMarkdown content={userMention(reply.comment)} />
                      </S.Comment>

                      <S.ExtraInfo>
                        <S.LikeButton>
                          <Heart />
                          <span>{reply.likes}</span>
                        </S.LikeButton>

                        <S.ReplyButton onClick={() => handleReply(reply.id)}>
                          Responder
                        </S.ReplyButton>
                      </S.ExtraInfo>

                      {replyComment.isReplying &&
                        replyComment.id === reply.id && <NewComment />}
                    </S.CommentInfos>
                  </S.CommentContainer>
                ))}
            </S.ReplyContainer>
          </S.CommentInfos>
        </S.CommentContainer>
      ))}
    </S.Container>
  );
};

export default CommentsList;
