import React, { useMemo, useEffect, useState, useCallback } from "react";
import type { PageProps } from "gatsby";
import * as S from "./styles";
import Title from "@components/Title";
import PostBlogCard from "@components/PostBlogCard";
import { pageTransitionIn } from "@animations/pagesTransition";
import useClientPagination from "@hooks/useClientPagination";
import useClientSearch from "@hooks/useClientSearch";
import useSearchParam from "@hooks/useSearchParam";

interface Tag {
  count: number;
  slug: string;
}

interface Post {
  frontmatter: {
    slug: string;
    date: string;
    title: string;
    tags: string[];
  };
  fields: {
    readingTime: {
      minutes: number;
    };
  };
  id: string;
}

interface PageContext {
  tag: { [key: string]: Tag };
  data: Post[];
}

type Props = PageProps<undefined, PageContext>;

const SearchPage: React.FC<Props> = ({ pageContext, location }) => {
  const { tag: listOfTags, data } = pageContext;
  const { query, updateSearchParam } = useSearchParam(location.search, "text");

  const { filteredData, searchText, handleSearch } = useClientSearch<Post>({
    data: data,
    searchKey: "frontmatter.title",
    initialSearch: query,
  });

  const { currentPage, currentItems, totalPages, goToPage, next, prev } =
    useClientPagination<Post>({
      items: filteredData,
      perPage: 30,
    });

  const normalizeTags = useMemo(
    () =>
      Object.keys(listOfTags).map((key) => ({
        name: key,
        count: listOfTags[key].count,
        slug: listOfTags[key].slug,
      })),
    [listOfTags]
  );

  const onHandleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearch(event);
      updateSearchParam("text", event.target.value);
    },
    [handleSearch]
  );

  return (
    <S.Container key={location.pathname} {...pageTransitionIn}>
      <Title $fontWeight="600">Buscar postagem</Title>
      <S.SearchBarContainer>
        <S.SearchBar htmlFor="search-bar">
          <input
            type="text"
            placeholder="Digite o que deseja buscar"
            id="search-bar"
            value={searchText}
            onChange={onHandleSearch}
          />
        </S.SearchBar>
      </S.SearchBarContainer>

      <S.TagsTitle>Tags</S.TagsTitle>

      <S.TagsContainer>
        <S.Tag to="/search" activeClassName="active">
          Todas
        </S.Tag>

        {normalizeTags.map((tag) => (
          <S.Tag key={tag.name} to={`/${tag.slug}`} activeClassName="active">
            {tag.name} ({tag.count})
          </S.Tag>
        ))}
      </S.TagsContainer>

      <S.ContentContainer>
        {currentItems.length != 0 ? (
          currentItems.map((post) => (
            <PostBlogCard
              key={post.id}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              minToRead={post.fields.readingTime.minutes}
              tags={post.frontmatter.tags}
              slug={post.frontmatter.slug}
              id={post.id}
            />
          ))
        ) : (
          <S.NoPosts>Nenhum post encontrado 😢</S.NoPosts>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default SearchPage;
