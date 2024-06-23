import React from "react";
import { ReactPaginateProps } from "react-paginate";
import { PaginationContainer } from "./styles";
import SimpleArrowLeft from "@components/Icons/SimpleArrowLeft";
import SimpleArrowRight from "@components/Icons/SimpleArrowRight";

//TODO: Remove this lib and implement your own pagination
const Pagination: React.FC<ReactPaginateProps> = (props) => {
  return (
    <PaginationContainer
      previousLabel={<SimpleArrowLeft />}
      nextLabel={<SimpleArrowRight />}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      breakLabel={"..."}
      renderOnZeroPageCount={null}
      {...props}
    />
  );
};

export default Pagination;
