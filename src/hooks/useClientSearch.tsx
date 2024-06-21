import { useState, useCallback, useMemo } from "react";

interface UseSearchProps<T> {
  data: T[];
  searchKey: keyof T | string;
  initialSearch?: string;
}

const useClientSearch = function <T>({
  data,
  searchKey,
  initialSearch,
}: UseSearchProps<T>) {
  const [searchText, setSearchText] = useState<string>(initialSearch || "");

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    []
  );

  const filteredData = useMemo(() => {
    if (!searchText) return data;

    return data.filter((item) => deepSearch(item, searchKey, searchText));
  }, [data, searchText, searchKey]);

  return {
    searchText,
    handleSearch,
    filteredData,
  };
};

export default useClientSearch;

//https://chatgpt.com/share/4a69c4f0-b2ec-4998-bc73-0e9ec99a29d7
function deepSearch<T>(
  item: T,
  key: keyof T | string,
  searchText: string
): boolean {
  if (typeof key === "string") {
    const keys = key.split(".");
    let value: any = item;
    for (const k of keys) {
      value = value[k as keyof typeof value];
      if (value === undefined) return false;
    }
    return String(value).toLowerCase().includes(searchText.toLowerCase());
  } else {
    const value = item[key];
    return String(value).toLowerCase().includes(searchText.toLowerCase());
  }
}
