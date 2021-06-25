import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Section } from './section'

const PostList = styled.ol`
  position: relative;
  z-index: 10;
  background-color: #f5f5f5;
  list-style-type: none;
  li {
    position: relative;
    .container {
      padding-top: 0px;
      height: 700px;
      .sticky {
        position: sticky;
        top: 0px;
        padding-top: 20px;
        .projecttitle {
          text-decoration: none;
          &:hover {
            color: #999999;
          }
        }

        .link {
          font-size: 25px;
          text-decoration: none;
          border-bottom: 2px solid #dcdcdc;
          &:hover {
            border-bottom: 2px solid #111111;
          }
        }
      }
    }
    .image {
      padding: 0px;
      margin-left: -20px;
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
    .tags span {
      /* position: absolute;
      top: 1rem;
      right: 1rem;
      margin: 0; */
      color: #999999;
      font-size: 25px;
    }
    .description {
      margin-top: 1rem;
    }
  }
`

export default function Posts() {
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
    <PostList id="postlist">
      {data.allMarkdownRemark.edges.map(edge => (
        <li key={edge.node.frontmatter.slug}>
          <Section>
            <div className="container">
              <div className="sticky">
                <Link to={edge.node.frontmatter.slug} className="projecttitle">
                  {edge.node.frontmatter.title}
                </Link>
                <p className="tags">
                  {edge.node.frontmatter.tags.map((tag, i) => {
                    if (edge.node.frontmatter.tags.length === i + 1) {
                      return <span key={tag}>{tag}</span>
                    } else {
                      return <span key={tag}>{tag}, </span>
                    }
                  })}
                </p>
                <p className="description">
                  {edge.node.frontmatter.description}
                </p>
                <br></br>
                <Link to={edge.node.frontmatter.slug} className="link">
                  View Project
                </Link>
              </div>
            </div>

            <Img
              fluid={edge.node.frontmatter.feature.childImageSharp.fluid}
              alt={edge.node.frontmatter.title}
              className="container"
            />
          </Section>
        </li>
      ))}
    </PostList>
  )
}
