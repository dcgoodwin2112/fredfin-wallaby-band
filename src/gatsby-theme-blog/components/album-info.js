import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    {/* This is where <Styled.a href="http://example.com/">your name</Styled.a>
    {` `}
    goes.
    <br />
    Or whatever, you make the rules. */}
    <Styled.h2>Peace. Love. Aliens.</Styled.h2>
    <Styled.p>&copy; Fredfin Wallaby/Drypoint Records</Styled.p>
    <Styled.p>Released: 2018</Styled.p>
    <Styled.p>Available from:<br/>
    <Styled.a href="https://store.cdbaby.com/cd/fredfinwallaby2">CD Baby</Styled.a><br/>
    <Styled.a href="https://open.spotify.com/album/38qYss0yStVnPVHi5Hi11A">Spotify</Styled.a>
    </Styled.p>

  </Fragment>
)
