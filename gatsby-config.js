module.exports = {
  siteMetadata: {
    title: `Gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
}
