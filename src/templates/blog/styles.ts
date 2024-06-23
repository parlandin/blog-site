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
  justify-content: center;
  margin: 25px 0;
`;
