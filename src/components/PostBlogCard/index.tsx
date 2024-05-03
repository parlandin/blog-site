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
}

const PostBlogCard: React.FC<PostBlogCardProps> = ({
  title,
  date,
  excerpt,
  slug,
  id,
  tags,
}) => {
  return (
    <S.Container id={id}>
      <S.LinkTo to={`/blog/${slug}`}>
        <S.Date>{formatDate(date ? date : "00-00-0000")}</S.Date>
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
