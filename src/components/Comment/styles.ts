import styled from "styled-components";

export const CommentContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 20px 0;
  border: none;
  padding: 0px;

  &.reply {
    border: none;
    padding: 0px 10px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &.reply {
    width: 30px;
    height: 30px;
  }
`;

export const CommentInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  overflow-x: auto;
`;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
`;

export const UserName = styled.span`
  font-weight: bold;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Date = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.primary};
  align-self: center;
`;

export const Separator = styled.div`
  width: 6px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
`;

export const Comment = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }

  svg {
    fill: ${({ theme }) => theme.colors.primary};
    width: 20px;
    height: 20px;
  }
`;

export const ReplyButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: underline;
  max-width: fit-content;
  margin-left: 20px;
`;

export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-left: 1px solid ${({ theme }) => theme.colors.primary};
  border-left-style: dashed;
`;

export const ReplyCount = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.7rem;
  margin-top: 10px;
  opacity: 0.8;
`;
