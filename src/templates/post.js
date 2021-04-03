import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
      html
    }
  }
`

export default function Post({ data }) {
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <p className="tags">
        {data.markdownRemark.frontmatter.tags.map((tag, i) => {
          if (data.markdownRemark.frontmatter.tags.length === i + 1) {
            return <span key={tag}>{tag}</span>
          } else {
            return <span key={tag}>{tag}, </span>
          }
        })}
      </p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  )
}
