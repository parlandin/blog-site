import * as React from "react";
import type { PageProps } from "gatsby";
import ComingSoon from "@components/ComingSoon";

const SearchPage: React.FC<PageProps> = ({ pageContext }) => {
  console.log({ pageContext });
  return <ComingSoon />;
};

export default SearchPage;
