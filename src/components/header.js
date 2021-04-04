import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderContainer = styled.header`
  padding: 1rem 0 3rem;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
  }

  a {
    color: #999999;
    text-decoration: none;
    margin-right: 1.3rem;
    &:hover {
      color: #666666;
    }
  }
  .active-nav-item {
    color: #000000;
    cursor: default;
    &:hover {
      color: #000000;
    }
  }
`

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <HeaderContainer>
      <h1>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active-nav-item">
              Work
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-nav-item">
              About
            </Link>
          </li>
          <li>
            <a href="mailto:mylesjeffery96@gmail.com">Email</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
