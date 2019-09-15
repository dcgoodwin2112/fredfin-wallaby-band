module.exports = {
  pathPrefix: `/fredfin-wallaby-band-gh-page`,
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Fredfin Wallaby`,
    author: `Fredfin Wallaby`,
    description: `Infomation and updates for the band Fredfin Wallaby `,
    social: [
      {
        name: `Facebook`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `Twitter`,
        url: `http://www.twitter.com/FredfinWallaby`,
      },
      {
        name: `ReverbNation`,
        url: `http://www.reverbnation.com/fredfinwallaby`,
      },
      {
        name: `Spotify`,
        url:`https://open.spotify.com/artist/2V6ttGXnp9ZNMHRe3VqNB3`
      },
    ],
  },
}
