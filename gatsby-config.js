module.exports = {
  siteMetadata: {
    title: `Quality Link`,
    siteUrl: `https://http://localhost:8000/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
