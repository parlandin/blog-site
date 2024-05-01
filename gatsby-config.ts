import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@images": "src/images",
          "@pages": "src/pages",
          "@types": "src/types",
          "@utils": "src/utils",
          "@src": "src",
          "@posts": "content/posts",
          "@Icons": "src/components/Icons",
          "@hooks": "src/hooks",
          "@context": "src/context",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
  ],
};

export default config;
