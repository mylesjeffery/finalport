import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

const Main = styled.main`
  max-width: 750px;
  margin: auto;
  .feature {
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.2em;
  }
  a {
    font-family: neue-haas-grotesk-text, sans-serif;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    &:hover {
      font-style: italic;
    }
  }
  pre {
    overflow: scroll;
    max-height: 750px;
  }
  ol {
    font-size: 1.5rem;
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
        <h2 className="neue">
          {data.markdownRemark.frontmatter.tags.map((tag, i) => {
            if (data.markdownRemark.frontmatter.tags.length === i + 1) {
              return <span key={tag}>{tag}</span>
            } else {
              return <span key={tag}>{tag}, </span>
            }
          })}
        </h2>
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
