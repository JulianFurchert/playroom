import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <header
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '48px',
        color: 'white',
        padding: 8,
        fontSize: 15
      }}
    >
      {data.site.siteMetadata.title}
    </header>
  )
}

export default Header
