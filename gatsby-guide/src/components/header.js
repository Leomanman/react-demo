import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)
  return (
    <>
      <div>header</div>
      <div>
        {data.site.siteMetadata.siteUrl}
      </div>
    </>
  )
}

