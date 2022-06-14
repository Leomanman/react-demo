import React from 'react'
import { Link, graphql} from "gatsby"
export default function Posts ({data}) {
  console.log(data.allMarkdownRemark.nodes)
  return (
    <>
      <div>Posts</div>
      <ul>
        {
          data.allMarkdownRemark.nodes.map(item => (
            <li key={item.fields.slug}><Link  to={`/article/${item.fields.slug}`}>{item.fields.slug}</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      fields {
        slug
      }
    }
  }
}

`