import React from "react";
import * as S from "./styles";
import { formatDate } from "@utils/formatDate";

export interface PostBlogCardProps {
  title: string;
  date?: string | null;
  excerpt: string;
  slug: string;
  id: string;
  tags: readonly (string | null)[];
  minToRead: number | null | undefined;
}

const PostBlogCard: React.FC<PostBlogCardProps> = ({
  title,
  date,
  excerpt,
  slug,
  id,
  tags,
  minToRead,
}) => {
  const minToReadFormated = minToRead
    ? `${Math.ceil(minToRead)} min de leitura`
    : "0 min de leitura";

  return (
    <S.Container id={id}>
      <S.LinkTo to={`/blog/post/${slug}`}>
        <S.CardHeader>
          <S.Date>{formatDate(date ? date : "00-00-0000")}</S.Date>

          <S.MinToReadContainer>
            <div />
            <span>{minToReadFormated}</span>
          </S.MinToReadContainer>
        </S.CardHeader>

        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>

        <S.TagsContainer>
          {tags?.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagsContainer>
      </S.LinkTo>
    </S.Container>
  );
};

export default PostBlogCard;
