import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const Font = css`
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

export const Container = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vmin;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  ${Font}
  z-index: 2;
`;

export const Main = styled.main`
  max-width: 650px;
  padding: 0 16px;
  width: 100%;
  margin: 40px auto 0;
  height: 100%;
  min-height: calc(100vh - 295px);

  @media (max-width: 650px) {
    min-height: calc(100vh - 323px);
  }
`;

export const MenuMobileWrapper = styled.section`
  width: 100%;
  height: 50px;
  ${Font}

  @media (min-width: 650px) {
    display: none;
  }
`;
