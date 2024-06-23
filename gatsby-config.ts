import type { GatsbyConfig } from "gatsby";
import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Parlandim<dev> - Blog`,
    siteUrl: `https://parlandin.github.io`,
    description: `Parlandim Space Blog - blog de um desenvolvedor apaixonado por tecnologia.`,
    twitterUsername: "@parlandim",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20V8H16V4H14V8H10V4H8ZM14 14V10H10V14H14Z"
                fill="currentColor"
              />
            </svg>`,
              isIconAfterHeader: false,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 600,
              quality: 100,
              withWebp: true,
              showCaptions: false,
              markdownCaptions: false,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
        ],
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
          "@contexts": "src/contexts",
          "@styles": "src/styles",
          "@api": "src/api",
          "@animations": "src/animations",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap`,
          },
          {
            name: "Architects Daughter",
            file: "https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-CR4QV84DL0",
        includeInDevelopment: false,
        routeChangeEventName: "gatsby-route-change",
      },
    },
  ],
  pathPrefix: "blog-site",
};

export default config;
