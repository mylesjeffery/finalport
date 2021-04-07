import React from 'react'
import { Link } from 'gatsby'

export default function Howdy() {
  return (
    <p>
      Hi! I’m a branding & user experience designer and recent graduate from
      Parsons School of Design with a BFA in{' '}
      <a
        href="https://www.newschool.edu/parsons/bfa-integrated-design/"
        target="_blank"
        rel="noreferrer"
      >
        Integrated Design
      </a>
      . As I graduated just as COVID19 was setting in, I took the opportunity to
      devote the remainder of 2020 and early 2021 to learning front end
      development.{' '}
      <Link to="/front-end-developer">Read more about my journey here.</Link>
      <br></br>
      <br></br>
      I'm currently located in the Bay Area and am seeking an entry level front
      end developer / UX / designer role on either coast. <br></br>
      <br></br>If you have any questions about my work or would like to chat,
      feel free to <a href="mailto:mylesjeffery96@gmail.com">reach out</a>!
    </p>
  )
}
