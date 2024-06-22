import React, { useState, useCallback, useMemo } from "react";
import Paginate from "@utils/clientPagination"; // Importe a classe Paginate

interface UseClientPaginationProps<DataType> {
  items: DataType[];
  perPage: number;
}

const useClientPagination = function <DataType>({
  items,
  perPage,
}: UseClientPaginationProps<DataType>) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginator = useMemo(
    () => new Paginate(items, perPage),
    [items, perPage]
  );

  const goToPage = useCallback((pageNum: number) => {
    setCurrentPage(pageNum);
  }, []);

  const next = useCallback(() => {
    if (paginator.hasNext()) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [paginator]);

  const prev = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }, [currentPage]);

  const currentItems = useMemo<DataType[]>(
    () => paginator.page(currentPage) as DataType[],
    [paginator, currentPage]
  );

  const totalPages = useMemo(() => paginator.totalPage(), [paginator]);

  return {
    currentPage,
    currentItems,
    totalItems: items.length,
    totalPages,
    goToPage,
    next,
    prev,
  };
};

export default useClientPagination;
