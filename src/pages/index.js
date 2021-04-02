import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Head from '../components/head'

const BlogList = styled.ol`
  list-style-type: none;
  margin: 0;
  li {
    margin: 1rem 0;
    a {
      background: #f4f4f4;
      color: #000000;
      display: block;
      padding: 1rem;
      text-decoration: none;
      &:hover {
        background: #e4e4e4;
      }
    }
    h2 {
      margin-bottom: 0;
    }
    .date {
      color: #777777;
      font-size: 1rem;
      font-style: italic;
    }
  }
`

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
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
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <BlogList>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p className="date">{edge.node.frontmatter.date}</p>
              <p className="description">{edge.node.frontmatter.description}</p>
              <Img
                fluid={edge.node.frontmatter.feature.childImageSharp.fluid}
                alt={edge.node.frontmatter.title}
              />
            </Link>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}
