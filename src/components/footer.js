import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    margin: 0;
  }
  .contact {
    display: flex;
    width: 100%;
    h1 {
      margin-top: 0;
      margin-right: 2rem;
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
    <>
      <FooterContainer>
        <div className="contact">
          <h1 className="neue">
            <a href="mailto:mylesjeffery96@gmail.com">Email</a>
          </h1>
          <h1 className="neue">
            <a
              href="https://www.linkedin.com/in/myles-jeffery/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h1>
          <h1 className="neue">
            <a
              href="https://github.com/mylesjeffery"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </h1>
        </div>

        <Link to="#top" className="neue">
          <h1>↑Top</h1>
        </Link>
      </FooterContainer>
      <p>
        Created by{' '}
        <span className="neue">{data.site.siteMetadata.author}, © 2021</span> –
        Typefaces:{' '}
        <a
          href="https://fonts.adobe.com/fonts/neue-haas-grotesk"
          target="_blank"
          rel="noreferrer"
          className="neue"
        >
          Neue Haas Grotesk
        </a>{' '}
        &{' '}
        <a
          href="https://typefaces.temporarystate.net/preview/Panama"
          target="_blank"
          rel="noreferrer"
        >
          Panama
        </a>
      </p>
    </>
  )
}
