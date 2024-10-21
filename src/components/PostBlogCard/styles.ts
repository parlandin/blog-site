import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primaryAlt};
  border-radius: 8px;
  min-height: 130px;
  margin: 20px 0;
  padding: 16px;
  transition: all 0.2s ease-in;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 600px) {
  }

  &.halloween {
    background-color: #030000;
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
  font-weight: 500;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
`;

export const MinToReadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 0 4px;
  }
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
