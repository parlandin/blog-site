import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;

  &.halloween {
    color: #000;

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Pirata One", cursive;
    }
  }
`;

export const Parchment = styled.div`
  z-index: -2;
  &.default {
    display: none;
  }

  & div.halloween {
    position: fixed;
    display: flex;
    width: 100%;
    min-width: 700px;
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    min-height: calc(100% + 10px);
    box-shadow: 2px 3px 20px black, 0 0 60px #000 inset;
    background: #e1e1e1db;
    filter: url(#wavy2);
    color: #000;
    z-index: -1;

    @media (max-width: 760px) {
      min-width: 101%;
    }
  }

  svg {
    position: fixed;
  }
`;

export const DateText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 30px;

  &.halloween {
    text-align: center;
    color: #000;
  }
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
