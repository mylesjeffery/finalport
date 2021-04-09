import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    li {
      margin-left: 1rem;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
    ul li {
      margin-left: 0;
      margin-right: 1rem;
    }
    #toplink {
      margin-right: 0;
    }
  }
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <p>Created by {data.site.siteMetadata.author}, © 2021</p>
      <ul>
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
        <li id="toplink">
          <a href="#top">Top↑</a>
        </li>
      </ul>
    </FooterContainer>
  )
}
