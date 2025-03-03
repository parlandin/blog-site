import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  margin-top: 20px;
`;

export const CommentSection = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-size: 0.8rem;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  border-bottom-style: dashed;
  resize: vertical;
  min-height: 140px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
    font-size: 0.8rem;
  }
`;

export const Preview = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 6px;
  border-bottom-style: dashed;
  color: ${(props) => props.theme.colors.text};
  min-height: 140px;
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.secondary};
`;

export const UserName = styled.span`
  margin-left: 10px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.secondary};
`;
