import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): Queries.getMetadataQuery => {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
        }
      }
      file(relativePath: { eq: "site.png" }) {
        childImageSharp {
          fixed(height: 630, width: 1200, fit: CONTAIN) {
            src
          }
        }
      }
    }
  `);

  return data;
};
