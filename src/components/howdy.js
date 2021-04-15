import React from 'react'
import { Link } from 'gatsby'

export default function Howdy() {
  return (
    <>
      <h2>Hey! I’m Myles.</h2>
      <p>
        I'm a digital product and brand designer who codes. I create distinctive
        digital experiences that evoke a company's personality through empathic
        UX, engaging visual design, and JavaScript.{' '}
      </p>
      <p>
        I graduated from Parsons School of Design with an{' '}
        <a
          href="https://www.newschool.edu/parsons/bfa-integrated-design/"
          target="_blank"
          rel="noreferrer"
        >
          Integrated Design BFA
        </a>{' '}
        in the spring of 2020, just as COVID-19 was setting in. The lockdown
        presented me with the opportunity to realize my dream of{' '}
        <Link to="/front-end-developer">learning front-end development</Link>.
        <br></br>
        <br></br>
        I'm eager to join a team where I can contribute and learn through
        building intuitive experiences with other designers and developers.
        Currently living in the Bay Area, but I'm open to relocation and remote
        work! <br></br>
        <br></br>I'd love to hear from you, so don't hesitate to{' '}
        <a href="mailto:mylesjeffery96@gmail.com">reach out</a>!
      </p>
    </>
  )
}
