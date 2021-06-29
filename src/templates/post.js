import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

const Main = styled.main`
  position: relative;
  z-index: 10;
  background-color: #f5f5f5;
  .feature {
    margin-bottom: 3rem;
  }
  section {
    display: flex;
    .container {
      padding: 20px;
      width: 50vw;
      position: relative;
      p {
        font-size: 25px;
      }
      a {
        font-size: 25px;
        text-decoration: none;
        border-bottom: 2px solid #dcdcdc;
        &:hover {
          border-bottom: 2px solid #111111;
        }
      }
      .indent {
        text-indent: 30px;
      }
      .tags span {
        color: #999999;
        font-size: 25px;
      }
      .titlelink {
        text-decoration: none;
        border-bottom: none;
        font-size: 30px;
        &:hover {
          color: #999999;
          border-bottom: none;
        }
      }

      .homelink {
        position: absolute;
        bottom: 20px;
        left: 20px;
        text-decoration: none;
        border-bottom: 2px solid #dcdcdc;
        &:hover {
          border-bottom: 2px solid #111111;
        }
      }
    }
    .image {
      padding: 0px;
      margin-left: -20px;
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
        <Img
          fluid={data.markdownRemark.frontmatter.feature.childImageSharp.fluid}
          alt={data.markdownRemark.frontmatter.title}
          className="feature"
        />
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
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
        {next ? (
          <>
            <section>
              <div class="container">
                <h2>Next Project:</h2>
                <br></br>
                <Link to={`/${next.frontmatter.slug}`} className="titlelink">
                  {next.frontmatter.title}
                </Link>

                <p className="tags">
                  {next.frontmatter.tags.map((tag, i) => {
                    if (next.frontmatter.tags.length === i + 1) {
                      return <span key={tag}>{tag}</span>
                    } else {
                      return <span key={tag}>{tag}, </span>
                    }
                  })}
                </p>
                <br></br>
                <p className="description">{next.frontmatter.description}</p>
                <br></br>
                <Link to={`/${next.frontmatter.slug}`} className="link">
                  View Project
                </Link>
                <br></br>
                <br></br>
                <Link to="/" className="homelink">
                  ← Home
                </Link>
              </div>
              <Img
                fluid={next.frontmatter.feature.childImageSharp.fluid}
                alt={next.frontmatter.title}
                className="container image"
              />
            </section>
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
