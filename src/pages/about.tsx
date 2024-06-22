import React from "react";
import ComingSoon from "@components/ComingSoon";
import SEO from "@components/SEO";
import { HeadFC } from "gatsby";

const AboutPage: React.FC = () => {
  return <ComingSoon />;
};

export const Head: HeadFC = ({ location }) => {
  return <SEO title="Sobre min" pathname={location.pathname} />;
};

export default AboutPage;
