import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  max-width: 750px;
  margin: 40px auto 40px;

  @media (max-width: 650px) {
    margin: 25px auto;
    padding: 0 16px;
  }

  @media (max-width: 760px) {
    max-width: 600px;
  }
`;

export const MenuSection = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.halloween {
    background-color: ${({ theme }) => theme.colors.menuBackground};
    padding: 4px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  position: relative;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  margin: 0 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.MenuMobileText};
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease-in;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  & svg {
    margin-right: 2px;
    width: 15px;
    height: 15px;
  }

  & a {
    position: absolute;
    inset: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.hoverText};
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

export const SocialMedia = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;

  & a {
    :first-of-type {
      margin-right: 8px;
    }
    cursor: pointer;

    & svg {
      width: 15px;
      height: 15px;
    }

    & span {
      display: none;
    }

    @media (max-width: 650px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: none;

      &:first-of-type {
        margin-right: 16px;
      }

      & svg {
        width: 20px;
        height: 20px;
      }

      & span {
        display: inline;
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};

  & p {
    font-size: 0.8rem;
    margin-top: 8px;

    & a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
