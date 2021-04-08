import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  max-width: 750px;
  padding-bottom: 3rem;
`

export default function Howdy() {
  return (
    <Container>
      <h1>
        Hi! I’m a branding / user experience designer and recent graduate from
        Parsons School of Design with a BFA in{' '}
        <a
          href="https://www.newschool.edu/parsons/bfa-integrated-design/"
          target="_blank"
          rel="noreferrer"
          className="neue"
        >
          Integrated Design
        </a>
        . As I graduated just as COVID19 was setting in, I took the opportunity
        to devote my lockdown to learning front end development. Read about my
        journey{' '}
        <Link to="/front-end-developer" className="neue">
          HERE
        </Link>
        .<br></br>
        <br></br> I'm currently located in the Bay Area and am seeking a junior
        front end developer / UX / designer role on either coast.<br></br>
        <br></br> If you have any questions about my work or would like to chat,
        feel free to{' '}
        <a href="mailto:mylesjeffery96@gmail.com" className="neue">
          reach out
        </a>
        !
      </h1>
    </Container>
  )
}
