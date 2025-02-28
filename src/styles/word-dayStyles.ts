import styled from "styled-components";
import { motion } from "framer-motion";

export const MotionContainer = styled(motion.section)`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  position: relative;

  &.halloween {
    background-color: #090808;
    padding: 15px 10px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    margin-top: 60px;
    position: relative;
  }
`;

export const OwlIcon = styled.div`
  position: absolute;
  top: -65px;
  right: -69px;
  z-index: 1;

  @media (max-width: 712px) {
    right: -50px;
  }
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
`;

export const Header = styled.section`
  width: 100%;
  height: 100%;
  margin: 10px 0;
`;

export const ZizZagLine = styled.div`
  --a: 90deg; /* control the angle */
  --s: 15px; /* size of the zig-zag */
  --b: 2px; /* control the thickness */

  background: ${({ theme }) => theme.colors.primary};
  height: calc(var(--b) + var(--s) / (2 * tan(var(--a) / 2)));
  width: 100%;
  --_g: var(--s) repeat-x
    conic-gradient(
      from calc(var(--a) / -2) at bottom,
      #0000,
      #000 1deg calc(var(--a) - 1deg),
      #0000 var(--a)
    );
  mask: 50% calc(-1 * var(--b)) / var(--_g) exclude, 50% / var(--_g);

  margin: 40px 0;
`;

export const SubSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SubTitle = styled.h2`
  margin: 20px 0;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};

  & span {
  }
`;

export const ContentTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 30px 0 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Roboto", cursive;
`;

export const Meaning = styled.div`
  & p {
    margin: 25px 0;
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
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  & span {
    font-size: 0.8rem;
    font-weight: 400;
    margin: 4px 0;
  }

  & span:first-of-type {
    margin-right: 10px;
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
