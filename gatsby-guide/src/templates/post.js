import React from 'react'
import { graphql } from "gatsby"
import SEO from '../components/seo'

export default function Post ({data}) {
  return (
    <>
      <SEO title='详情页'/>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
    </>
  )
}

export const query = graphql`
query($slug: String){
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    fields {
      slug
    }
    frontmatter {
      date
      title
    }
  }
}
`
