import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../../static/mylesemoji.png'

export default function Head({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${data.site.siteMetadata.title} | ${title}`}>
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}
