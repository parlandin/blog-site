import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 50px 0;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  border: none;
  justify-content: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 3px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.9;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 15;
  cursor: pointer;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: fit-content;
  max-width: 500px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 16;

  @media (max-width: 400px) {
    margin: 8px;
  }
`;

export const QrCode = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  margin: 20px 0 10px;
  max-width: 400px;
  text-align: center;
  width: 100%;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const LinkContainer = styled.div`
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  margin: 15px 0 10px;
  border-radius: 8px;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
