import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  max-width: 353px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: 600;
  text-align: center;
  max-width: 500px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const CustomLink = styled(Link)`
  padding: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.hoverText};
  background-color: ${({ theme }) => theme.colors.hover};
  border-radius: 5px;
`;
