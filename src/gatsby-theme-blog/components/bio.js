/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import AlbumInfo from "./album-info.js"

const AlbumContent = () => {
  const data = useStaticQuery(albumQuery)
  const {
    site: {
      siteMetadata: { author },
    },
    album,
  } = data

  return (
    <Fragment>
      <Flex css={css({ mb: 4 })}>
        <Image
          fixed={album.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 275,
          })}
        />
        {/* {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )} */}
        <Styled.div>
          <AlbumInfo />
        </Styled.div>
      </Flex>
      <Styled.p>
        <Styled.strong css={css({color: 'primary'})}>Peace. Love. Aliens. </Styled.strong>
        Forget invasions, the aliens have been here all along and are helping us
        on the way to enlightenment. Embrace the spirit of the universe with
        psychedelic and sci-fi rock, with the occasional progressive rock anthem
        for good measure.
      </Styled.p>
      <Styled.hr/>
      <Styled.p>
        <Styled.h2>About the band</Styled.h2>
        Fredfin Wallaby brings hard rocking Peace and Love, riding the waves of
        the krautrock tradition into the New Prog of today. Soaring synthesizers
        and atmospherics weave a fabric of sound beneath driving melodic bass.
        Guitars dance in rock songs and meditations that visit our blue crystal
        planet to take us on a trip with the spirits of the aether.
      </Styled.p>

      <Styled.p>
        Peace and Love doesn't have to come quietly. Shout it out. Dance it out.
        Rock it out. Ride the waves of kraut and space with Fredfin Wallaby.
      </Styled.p>

      <Styled.p>
        For fans of R.E.M., Hawkwind, Porcupine Tree, Dream Theater, The Mars
        Volta, and progressive rock ancient and modern.
      </Styled.p>
    </Fragment>
  )
}

const albumQuery = graphql`
  query AlbumQuery {
    site {
      siteMetadata {
        author
      }
    }
    album: file(
      absolutePath: {
        regex: "/fredfin_wallaby_album_cover.(jpeg|jpg|gif|png)/"
      }
    ) {
      childImageSharp {
        fixed(width: 275, height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AlbumContent
