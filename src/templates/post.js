import React from 'react'
import { graphql, Link } from 'gatsby'
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

  .nextlink {
    position: relative;
    background: #f4f4f4;
    color: hsla(0, 0%, 0%, 0.8);
    display: block;
    padding: 1rem;
    text-decoration: none;
    &:hover {
      background: #e4e4e4;
    }
    h2 {
      margin-bottom: 0;
    }
    .date {
      color: #777777;
      font-size: 1rem;
      font-style: italic;
      margin-top: 0.4rem;
    }
    .tags {
      position: absolute;
      top: 1rem;
      right: 1rem;
      margin: 0;
      color: #777777;
      @media (max-width: 800px) {
        position: relative;
        top: 0;
        right: 0;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
    .description {
      margin-top: 1rem;
    }
  }
`

export const query = graphql`
  query($slug: String!, $nextPostId: String) {
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
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        slug
        title
        tags
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
        description
      }
    }
  }
`

export default function Post({ data }) {
  const { next } = data
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
        {next ? (
          <>
            <br></br>
            <hr></hr>
            <h2>Next Post: </h2>
            <Link to={`/${next.frontmatter.slug}`} className="nextlink">
              <h2>{next.frontmatter.title}</h2>

              <p className="tags">
                {next.frontmatter.tags.map((tag, i) => {
                  if (next.frontmatter.tags.length === i + 1) {
                    return <span key={tag}>{tag}</span>
                  } else {
                    return <span key={tag}>{tag}, </span>
                  }
                })}
              </p>
              <p className="description">{next.frontmatter.description}</p>
              <Img
                fluid={next.frontmatter.feature.childImageSharp.fluid}
                alt={next.frontmatter.title}
              />
            </Link>
          </>
        ) : (
          <>
            <p>That's all folks!</p>
            <Link to="/">←Work</Link>
          </>
        )}
      </Main>
    </Layout>
  )
}
