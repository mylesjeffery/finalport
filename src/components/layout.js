import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import { GlobalStyles } from '../globalStyles'

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex-grow: 1;
  }
`

export default function Layout({ children }) {
  return (
    <Container id="top">
      <GlobalStyles />
      <div className="content">
        <Header />
        {children}
      </div>
      <Footer />
    </Container>
  )
}
