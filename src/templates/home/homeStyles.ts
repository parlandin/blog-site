import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.section`
  height: 100%;
  margin-top: 30px;
`;

export const PostContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
