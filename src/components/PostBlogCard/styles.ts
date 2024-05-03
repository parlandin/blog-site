import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primaryAlt};
  border-radius: 8px;
  min-height: 130px;
  margin: 20px 0;
  padding: 16px;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  //margin: 2px 0;
  line-height: 1.4rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Tag = styled.span`
  color: ${({ theme }) => theme.colors.hoverText};
  background-color: ${({ theme }) => theme.colors.tertiary};
  font-size: 0.8rem;
  margin-right: 10px;
  padding: 2px 8px;
  border-radius: 4px;
`;
