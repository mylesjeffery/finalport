import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

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
    p {
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
              date
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
          <li>
            <Link to={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </BlogList>
    </Layout>
  )
}
