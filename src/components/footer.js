import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin-top: 3rem;
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
    </FooterContainer>
  )
}
