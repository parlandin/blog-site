import React, { useCallback } from "react";
import * as S from "./styles";

import { list } from "./list";
import Comment from "@components/Comment";

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

  return (
    <S.Container>
      {list.map((item) => (
        <Comment
          key={item.id}
          listComment={item}
          currentUser={currentUser}
          handleReply={handleReply}
          replyComment={replyComment}
        >
          {item.reply &&
            item.reply.map((reply) => (
              <Comment
                key={reply.id}
                listComment={reply}
                currentUser={currentUser}
                handleReply={handleReply}
                isReplying={true}
                replyComment={replyComment}
              />
            ))}
        </Comment>
      ))}
    </S.Container>
  );
};

export default CommentsList;
