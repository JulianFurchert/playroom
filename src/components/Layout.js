import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
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
    <div
      css={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <header>
        {data.site.siteMetadata.title}
      </header>
      <main
        css={{
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout
