import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.section)`
  width: 100%;
  height: 100%;
`;

export const Container = styled.section`
  margin-bottom: 30px;

  & p {
    font-size: 1.1rem;
    line-height: 1.2;
    text-align: justify;
  }

  & h1 span {
    font-weight: 700;
  }

  & span.sub {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SubTitle = styled.h2`
  margin: 20px 0 10px;
  font-size: 1.3rem;
  font-weight: 500;

  & span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContentTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 20px 0 10px;
`;

export const Meaning = styled.div`
  & p {
    margin: 15px 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1;
  }
`;

export const Etimology = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1;
`;

export const Extra = styled.div`
  margin: 20px 0 10px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 2px 0;
  }
`;

export const NotificationWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const NotificationButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  min-width: 190px;
  cursor: pointer;

  & svg {
    margin-right: 10px;
  }

  & + button {
    margin-left: 15px;
  }

  @media (max-width: 469px) {
    margin-right: 15px;
    & + button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;
