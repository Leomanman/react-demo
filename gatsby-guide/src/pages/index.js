import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';
export default function Home({ data }) {
  console.log(data);

  return (<div>
    <Header />
    {data.site.siteMetadata.description}
  </div>)
}

export const query = graphql`
query {
  site {
    siteMetadata {
      description
      siteUrl
      title
    }
  }
}
`
