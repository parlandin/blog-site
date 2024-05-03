import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const ComingSoon: React.FC = () => {
  return (
    <Container>
      <Title>
        Em breve{" "}
        <span role="img" aria-label="emoji">
          🚧
        </span>
      </Title>
    </Container>
  );
};

export default ComingSoon;
