import { CustomContentProps } from "notistack";
import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  & {
    transform: scale(1);
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    border-radius: 100px;
  }
  &::before {
    animation: spinner 1s cubic-bezier(0.6, 0, 0.4, 1) infinite;
    border: 3px solid transparent;
    border-top-color: currentColor;
  }
  &::after {
    border: 3px solid;
    opacity: 0.2;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const StyledSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  & > ${StyledSpinner} {
    margin-right: 10px;
  }
`;

interface ReportCompleteProps extends CustomContentProps {
  allowDownload: boolean;
}

const LoadingVariant = React.forwardRef<HTMLDivElement, ReportCompleteProps>(
  (props, ref) => {
    const {
      id,
      message,
      persist,
      anchorOrigin,
      autoHideDuration,
      hideIconVariant,
      iconVariant,
      variant,
      ...other
    } = props;

    return (
      <StyledSpinnerContainer ref={ref} role="loading" {...other}>
        <StyledSpinner />
        {message}
      </StyledSpinnerContainer>
    );
  }
);

export default LoadingVariant;
