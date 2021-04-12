import React from 'react'
import { Link } from 'gatsby'

export default function Howdy() {
  return (
    <>
      <h2>Hey! I’m Myles.</h2>
      <p>
        I'm a digital product & brand designer who also loves to write code! I
        create distinct digital experiences that evoke a company's personality
        through UX, visual design, and Javascript.{' '}
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
        Currently living in the Bay Area, I'm seeking a junior designer /
        developer position on either coast. I'm open to remote work and
        relocation! <br></br>
        <br></br>I'd love to hear from you, so don't hesitate to{' '}
        <a href="mailto:mylesjeffery96@gmail.com">reach out</a>!
      </p>
    </>
  )
}
