module.exports = {
  pathPrefix: `/fredfin-wallaby-band-gh-page`,
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "FredfinWallaby",
    //     short_name: "fredfin",
    //     start_url: "/",
    //     background_color: "#6b37bf",
    //     theme_color: "#6b37bf",
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: "standalone",
    //     icon: "content/assets/icon.png", // This path is relative to the root of the site.
    //     // An optional attribute which provides support for CORS check.
    //     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //     // Any invalid keyword or empty string defaults to `anonymous`
    //     crossOrigin: `use-credentials`,
    //   },
    // },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Fredfin Wallaby`,
    author: `Fredfin Wallaby`,
    description: `Infomation and updates for the band Fredfin Wallaby `,
    social: [
      {
        name: `Facebook`,
        url: `https://facebook.com/fredfinwallaby`,
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
        url: `https://open.spotify.com/artist/2V6ttGXnp9ZNMHRe3VqNB3`,
      },
    ],
  },
}
