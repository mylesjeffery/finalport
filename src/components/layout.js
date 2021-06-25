import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

import { GlobalStyles } from '../globalStyles'

export const Container = styled.div`
  margin: 0 auto;
  /* max-width: 750px; */
  display: flex;
  flex-direction: column;
  /* height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth; */

  .content {
    flex-grow: 1;
  }
`

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <div className="content">
        <div id="top"></div>
        <Header />
        {children}
      </div>
      {/* <Footer /> */}
    </Container>
  )
}
