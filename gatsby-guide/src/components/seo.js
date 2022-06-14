import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

export default function SEO({ title, description, meta, lang }) {
  // 获取配置文件中的seo
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
          siteUrl
        }
      }
    }
  `)
  console.log('============');
  
  console.log(site)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: "texy",
  meta: [],
  lang: "en",
}
