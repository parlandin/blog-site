import styled from "styled-components";

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

  & span.sub {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SubTitle = styled.h2`
  margin: 20px 0 10px;
  font-size: 1.3rem;
  font-weight: 500;

  & span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContentTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 20px 0 10px;
`;

export const Meaning = styled.div`
  & p {
    margin: 15px 0;
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
  margin: 20px 0 10px;
  display: flex;
  flex-direction: column;

  & span {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 2px 0;
  }
`;
