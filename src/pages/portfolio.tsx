import * as React from "react";
import type { PageProps } from "gatsby";
import MainLayout from "@layouts/MainLayout";
import ComingSoon from "@components/ComingSoon";

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <ComingSoon />
    </MainLayout>
  );
};

export default PortfolioPage;
