import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderContainer = styled.header`
  padding: 1rem 0 3rem;

  h1 {
    cursor: default;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  nav {
    a {
      color: #999999;
      text-decoration: none;
      margin-right: 1.3rem;
      &:hover {
        color: #666666;
      }
    }
  }
  .navlinks a {
    margin-right: 0;
    margin-left: 1.3rem;
  }

  .active-nav-item {
    color: #000000;
    cursor: default;
    &:hover {
      color: #000000;
    }
  }
`

export default function Header({ about }) {
  const [job, setJob] = useState(['designer', 'codes'])

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

  function mouseEnter() {
    setJob(['developer', 'designs'])
  }
  function mouseLeave() {
    setJob(['designer', 'codes'])
  }

  return (
    <HeaderContainer>
      <h1 onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
        {data.site.siteMetadata.title} is a {job[0]} who {job[1]}.
      </h1>
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
        </ul>
        <ul className="navlinks">
          <li>
            <a href="mailto:mylesjeffery96@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/myles-jeffery/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mylesjeffery"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
