import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import MDXWrapper from "@layouts/MDXWrapper";

const FistBlog: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <MainLayout>
      <div style={{ height: "1000px", marginTop: "20px" }}>
        <Title>{data.mdx?.frontmatter?.title}</Title>
        <p>{data.mdx?.frontmatter?.date}</p>

        <MDXWrapper>{children}</MDXWrapper>
      </div>
    </MainLayout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export default FistBlog;
