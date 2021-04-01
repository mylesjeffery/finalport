import React from 'react'

import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

import { GlobalStyles } from '../globalStyles'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex-grow: 1;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </Container>
  )
}
