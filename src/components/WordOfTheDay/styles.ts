import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 70px;
  //border: 1px solid ${({ theme }) => theme.colors.primaryAlt};
  border-radius: 4px;
  //max-width: 260px;
  font-size: 1rem;
  color: #fe72cd;
`;

export const text = styled.p`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.5px;
`;

export const word = styled.p`
  text-align: center;
`;

export const Image = styled.div`
  & img {
  }
`;

export const Ballon = styled.div`
  width: max-content;
  margin-left: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  border-radius: 8px;
  transition: all 0.2s ease-in;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.colors.primary};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -21px;
    top: 13px;
  }

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.colors.background};
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 13px;
    transition: all 0.2s ease-in;

    &:hover {
      border-right: 10px solid ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    &::before {
      border-right: 10px solid ${({ theme }) => theme.colors.primary};
    }

    &::after {
      border-right: 10px solid ${({ theme }) => theme.colors.primary};
    }
  }

  & a {
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`;
