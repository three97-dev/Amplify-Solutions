require("dotenv").config();

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(`Contentful spaceId and the access token need to be provided.`);
}

// Used for pages header and seo links
const siteUrl = `https://www.amplify-solutions.ca`;

console.log("process.env.HUBSPOT_API_KEY", process.env.HUBSPOT_API_KEY);

module.exports = {
  siteMetadata: {
    title: `Amplify`,
    description: `Amplify description`,
    image: `/logo.png`,
    siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-source-hubspot-forms',
      options: {
        apiKey: process.env.HUBSPOT_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        purgeCSSOptions: {
          safelist: [/Dropdown/, "is-open", "is-selected", /slick/], // Don't remove this selectors
        },
      },
    },
  ],
};
