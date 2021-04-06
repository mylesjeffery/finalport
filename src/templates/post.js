import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

const Main = styled.main`
  .feature {
    margin-bottom: 3rem;
  }

  .tags {
    color: #777777;
  }
`

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
        feature {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
      }
      html
    }
  }
`

export default function Post({ data }) {
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <Main>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p className="tags">
          {data.markdownRemark.frontmatter.tags.map((tag, i) => {
            if (data.markdownRemark.frontmatter.tags.length === i + 1) {
              return <span key={tag}>{tag}</span>
            } else {
              return <span key={tag}>{tag}, </span>
            }
          })}
        </p>
        <p>{data.markdownRemark.frontmatter.description}</p>
        <Img
          fluid={data.markdownRemark.frontmatter.feature.childImageSharp.fluid}
          alt={data.markdownRemark.frontmatter.title}
          className="feature"
        />
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </Main>
    </Layout>
  )
}
