import React from "react";
import * as S from "./styles";
import ViewMarkdown from "@components/ViewMarkdown";
import Heart from "@components/Icons/Heart";

const CommentsList: React.FC = () => {
  const list = [
    {
      id: 1,
      comment:
        "This is a great article! Here's an example of code I tried:\n```javascript\nconst test = () => {\n  console.log('Hello world');\n};\n```",
      user: {
        name: "Parley",
        avatar: "https://avatar.iran.liara.run/public/10",
      },
      likes: 42,
      reply: [
        {
          id: 2,
          comment:
            "Thanks! I also found this useful:\n- Point 1\n- Point 2\n- Point 3 <br>\n [Link to the article](https://example.com)",
          user: {
            name: "John",
            avatar: "https://avatar.iran.liara.run/public/15",
          },
          likes: 15,
        },
      ],
    },
    {
      id: 3,
      comment:
        "**Important note:** Make sure to check the [documentation](https://docs.example.com) for more details!",
      user: {
        name: "Maria",
        avatar: "https://avatar.iran.liara.run/public/23",
      },
      likes: 87,
      reply: [
        {
          id: 4,
          comment:
            "Good point! Here's a table with more info:\n| Feature | Status |\n|---------|--------|\n| Test 1 | ✅ |\n| Test 2 | ⚠️ |",
          user: {
            name: "Alex",
            avatar: "https://avatar.iran.liara.run/public/31",
          },
          likes: 23,
        },
        {
          id: 5,
          comment: "_Italic text_ can be useful for emphasis",
          user: {
            name: "Sarah",
            avatar: "https://avatar.iran.liara.run/public/42",
          },
          likes: 9,
        },
        {
          id: 6,
          comment: "~~Strikethrough~~ for deprecated features",
          user: {
            name: "Mike",
            avatar: "https://avatar.iran.liara.run/public/55",
          },
          likes: 31,
        },
      ],
    },
    {
      id: 7,
      comment:
        "# Main Question\n## Sub-question\nCan someone explain how to implement this?",
      user: {
        name: "Lucas",
        avatar: "https://avatar.iran.liara.run/public/61",
      },
      likes: 12,
    },
    {
      id: 8,
      comment:
        "> Quote from the article\nThis really helped me understand the concept better!",
      user: {
        name: "Emma",
        avatar: "https://avatar.iran.liara.run/public/72",
      },
      likes: 5,
      reply: [
        {
          id: 9,
          comment: "Here's an inline code example: `const value = 42;`",
          user: {
            name: "David",
            avatar: "https://avatar.iran.liara.run/public/81",
          },
          likes: 3,
        },
        {
          id: 10,
          comment:
            "Consider adding this checklist:\n- [x] Task 1\n- [ ] Task 2\n- [x] Task 3",
          user: {
            name: "Lisa",
            avatar: "https://avatar.iran.liara.run/public/91",
          },
          likes: 7,
        },
      ],
    },
    {
      id: 11,
      comment:
        "```python\ndef example():\n    return 'Hello, World!'\n```\nThis Python example might be helpful!",
      user: {
        name: "Carlos",
        avatar: "https://avatar.iran.liara.run/public/99",
      },
      likes: 18,
      reply: [
        {
          id: 12,
          comment:
            "Great example! Here's the equivalent in TypeScript:\n```typescript\nconst example = (): string => {\n  return 'Hello, World!';\n};\n```",
          user: {
            name: "Ana",
            avatar: "https://avatar.iran.liara.run/public/12",
          },
          likes: 11,
        },
      ],
    },
  ];

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

              <S.ReplyButton>Responder</S.ReplyButton>
            </S.ExtraInfo>

            {item.reply?.length > 0 && (
              <S.ReplyCount>{item.reply?.length} respostas</S.ReplyCount>
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
                        <ViewMarkdown content={reply.comment} />
                      </S.Comment>

                      <S.ExtraInfo>
                        <S.LikeButton>
                          <Heart />
                          <span>{reply.likes}</span>
                        </S.LikeButton>
                      </S.ExtraInfo>
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
