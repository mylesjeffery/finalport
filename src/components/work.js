import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  padding: 2rem 0;
`

const PostList = styled.ol`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-left: 0;
    margin-bottom: 2rem;
    display: flex;
    .metadata {
      width: 60%;
      margin-right: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid grey;
    }
    .feature-image {
      width: 40%;
    }
    h1 {
      margin-top: 0;
    }

    h2 {
      margin-bottom: 0;
      max-width: 750px;
    }
    a:hover {
      font-style: normal;
      color: red;
    }

    .tags {
      margin: 0;
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

export default function Work() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              description
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
            }
          }
        }
      }
    }
  `)
  return (
    <Container id="work">
      <h1 className="neue">Work</h1>
      <br></br>
      <PostList>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <div className="metadata">
              <Link to={edge.node.frontmatter.slug}>
                <h1>{edge.node.frontmatter.title}</h1>

                <h2 className="neue">
                  {edge.node.frontmatter.tags.map((tag, i) => {
                    if (edge.node.frontmatter.tags.length === i + 1) {
                      return tag
                    } else {
                      return <span>{tag}, </span>
                    }
                  })}
                </h2>
                <h2 className="description">
                  {edge.node.frontmatter.description}
                </h2>
              </Link>
            </div>
            <div className="feature-image">
              <Img
                fluid={edge.node.frontmatter.feature.childImageSharp.fluid}
                alt={edge.node.frontmatter.title}
              />
            </div>
          </li>
        ))}
      </PostList>
    </Container>
  )
}
