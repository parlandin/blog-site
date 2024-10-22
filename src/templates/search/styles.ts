import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const GenericContainer = styled.div`
  width: 100%;

  &.halloween {
    padding: 15px 5px 10px;
    border-radius: 6px;
    backdrop-filter: blur(4px);
    background-color: ${({ theme }) => theme.colors.menuBackground};
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const SearchBar = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 1rem;

  & input {
    width: 100%;
    border: none;
    outline: none;
    font-size: inherit;
    padding: 10px;
    background-color: transparent;
    color: inherit;
    font-weight: 600;

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.7;
      font-weight: 500;
    }
  }
`;

export const TagsTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
`;

export const Tag = styled(Link)`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  font-size: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ContentContainer = styled.div`
  margin: 20px 0;
`;

export const NoPosts = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 20px 0;
`;
