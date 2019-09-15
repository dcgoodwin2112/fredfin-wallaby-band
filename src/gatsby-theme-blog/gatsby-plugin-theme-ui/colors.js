import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// const darkBlue = `#007acc`
// const lightBlue = `#66E0FF`
// const blueGray = `#282c35`
const darkRed = `#244E0A`
const lightRed = `#599F2C`
const grey = `#08041E`

export default merge(defaultThemeColors, {
  // text: blueGray,
  // primary: darkBlue,
  // heading: blueGray,
  // modes: {
  //   dark: {
  //     background: blueGray,
  //     primary: lightBlue,
  //     highlight: lightBlue,
  //   },
  // },
  text: grey,
  primary: darkRed,
  heading: grey,
  modes: {
    dark: {
      background: grey,
      primary: lightRed,
      highlight: lightRed,
    },
  },
})
