import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "@components/Title";
import MainLayout from "@layouts/MainLayout";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }: PageProps<Queries.AllBlogPostsQuery>) => {
  return (
    <MainLayout>
      <div style={{ height: "1000px", marginTop: "20px", color: "#fff" }}>
        <Title>My blog posts</Title>
        <br />
        <p>My cool posts will go in here</p>
        <br />

        {data.allMdx.nodes.map((node) => (
          <>
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter?.slug}`}>
                  {node.frontmatter?.title}
                </Link>
              </h2>
              <br />
              <p>Posted: {node.frontmatter?.date}</p>
              <p>{node.excerpt}</p>
            </article>
            <br />
          </>
        ))}
      </div>
    </MainLayout>
  );
};

export default BlogPage;

export const query = graphql`
  query AllBlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "DD-MM-YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return (
    <>
      <title>blog2 </title>:
      <meta name="description" content="blog content" />;
    </>
  );
};
