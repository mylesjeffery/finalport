import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderContainer = styled.header`
  /* padding: 1rem 0 3rem; */
  display: flex;
  align-items: top;
  justify-content: space-between;

  h1 {
    cursor: default;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  ul li:nth-child(2) {
    margin-left: 2rem;
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
      <h1>
        <Link to="/" className="neue">
          {data.site.siteMetadata.title}
        </Link>{' '}
        is a designer who codes.
      </h1>
      <nav>
        <ul>
          <li>
            <h1>
              <Link to="/#work" className="neue">
                Work
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link to="/#about" className="neue">
                About
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
