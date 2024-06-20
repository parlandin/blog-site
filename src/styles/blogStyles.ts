import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export const Container = styled(motion.section)`
  height: 100%;
  margin-top: 30px;
`;

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
`;

export const PaginationButton = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
  }

  &.enabled {
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;
