import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 30px;
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0px;
`;

export const Line = styled.div`
  width: 100px;
  height: 2px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 5px auto 10px;
`;
