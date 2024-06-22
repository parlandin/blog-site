import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const PaginationContainer = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;

  & li {
    list-style: none;
    margin: 0 7px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    padding: 5px 10px;

    & a {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }

    &.previous,
    &.next {
      color: ${({ theme }) => theme.colors.primary};

      & a {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    & svg {
      width: 18px;
      height: 18px;
      color: inherit;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 5px 8px;
    margin: 0 4px;
  }
`;
