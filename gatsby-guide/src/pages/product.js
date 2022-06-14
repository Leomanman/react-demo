import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
export default function Product ({data}) {
  return (
    <>
      {
        data.allProductsJson.nodes.map(item =>{
          return (
            <div key={item.title}>
              <p>{item.title}</p>
              <p>{item.address}</p>
              <div style={{width: 400}}>
              {/* <Img fluid={item.url.childImageSharp.fluid} /> */}
              <Img fixed={item.url.childImageSharp.fixed} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

// export const query = graphql`
//   query {
//     allProductsJson {
//       nodes {
//         address
//         price
//         title
//         url {
//           childImageSharp {
//             fluid {
//               aspectRatio
//               src
//               sizes
//               srcSet
//             }
//           }
//         }
//       }
//     }
//   }
// `


export const query = graphql`
query {
  allProductsJson {
    nodes {
      address
      id
      price
      title
      url {
        childImageSharp {
          fixed(height: 200) {
            srcSet
            src
            height
            width
          }
        }
      }
    }
  }
}
`
