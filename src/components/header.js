import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  height: 500px;
  display: flex;
  .container {
    padding: 20px;
    width: 50%;
    position: relative;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .right {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    &:hover {
      color: #999999;
    }
  }
  a {
    color: #999999;
    text-decoration: none;

    &:hover {
      color: #111111;
    }
  }
  nav {
    ul {
      list-style-type: none;
      margin: 0;
      text-align: right;
    }
    .navlinks a {
      margin-right: 0;

      /* margin-left: 1.3rem; */
    }
    @media (max-width: 650px) {
      display: block;
      .navlinks a {
        margin-left: 0;
        margin-right: 1.3rem;
      }
    }
  }
`

export default function Header({ about }) {
  // const [job, setJob] = useState([
  //   ['designer', 'red'],
  //   ['[codes]', 'blue'],
  // ])

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  // function mouseEnter() {
  //   setJob([
  //     ['coder', 'blue'],
  //     ['[designs]', 'red'],
  //   ])
  // }
  // function mouseLeave() {
  //   setJob([
  //     ['designer', 'red'],
  //     ['[codes]', 'blue'],
  //   ])
  // }

  return (
    <HeaderContainer>
      <div className="container left">
        <Link to="/">
          <h1>{data.site.siteMetadata.title}</h1>
        </Link>

        <p>
          Hey! I'm a graphic / UX designer and frontend developer. I create
          digital experiences that evoke a company's identity through empathic
          UX, engaging visual design, and JavaScript. <br></br>
          Check out my <a href="#postlist">work below</a> or{' '}
          <a href="#about">read more about me</a>.
        </p>
      </div>
      <div className="container right">
        <div>
          <h2>
            Graphic design and<br></br> frontend development
          </h2>
          <br></br>
          <a href="/#postlist">Work, </a>
          <Link to="/#about">About</Link>
        </div>
        <nav>
          <ul className="navlinks">
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
            <li>
              <a
                href="/uploads/mylesjeffery_resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}
