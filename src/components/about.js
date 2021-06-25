import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

import { Section } from './section'

const AboutContainer = styled.div`
  position: relative;
  z-index: 10;

  /* background-color: #191919; */
  background-color: #f5f5f5;
  p,
  h2,
  a {
    /* color: #f5f5f5; */
    max-width: 700px;
  }
  a {
    text-decoration: none;
    border-bottom: 2px solid #dcdcdc;
    &:hover {
      border-bottom: 2px solid #111111;
    }
  }

  .aboutcontent {
    height: 700px;
    h2 {
      line-height: 36px;
    }
    .indent {
      text-indent: 30px;
    }
  }
  .aboutstuff {
    background-color: #191919;
    p,
    h2 {
      color: #f5f5f5;
    }
    .sticky {
      position: sticky;
      top: 20px;
    }
  }
  .aboutstuffright {
    padding-bottom: 150px;
    .flex {
      display: flex;
      .fifty {
        width: 50%;
      }
    }
    .dates {
      color: #999999;
    }
  }
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "IMG_35372.JPG" }) {
        childImageSharp {
          fluid {
            src
            srcSet
            aspectRatio
            base64
            sizes
          }
        }
      }
    }
  `)
  return (
    <AboutContainer id="about">
      <Section>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Me"
          className="container"
        />

        <div className="container aboutcontent">
          <h2>
            I'm a Bay Area based designer and developer focused on the
            intersection of branding and UX. I create digital experiences that
            evoke identities through interaction, typography, and graphics.
          </h2>
          <h2 className="indent">
            After graduating from Parsons in the spring of 2020, I decided to
            devote my COVID lockdown to learning frontend development.
          </h2>
          <h2 className="indent">
            I'm looking to join a team in which I can contribute and learn with
            other designers and developers.{' '}
            <a href="mailto:mylesjeffery96@gmail.com">Let's work together.</a>
          </h2>
        </div>
      </Section>
      <Section>
        <div className="container aboutstuff ">
          <h2 className="sticky">Education</h2>
        </div>
        <div className="container aboutstuffright">
          <h2>Parsons School of Design</h2>
          <p className="dates">Grad. 2020</p>
          <br></br>
          <p>
            I studied{' '}
            <a
              href="https://www.newschool.edu/parsons/bfa-integrated-design/"
              target="_blank"
              rel="noreferrer"
            >
              Integrated Design
            </a>{' '}
            at Parsons, a multidisciplinary approach to design studies that
            combines various design methodologies to develop a holistic, hybrid
            practice.
          </p>
          <br></br>
          <br></br>
          <h2>Frontend Development</h2>
          <p className="dates">2020 → Present</p>
          <br></br>
          <p>
            After graduation, I moved back to the west coast and devoted my
            lockdown to learning front end development. With a background in
            HTML and CSS, I followed Scrimba's Front End Development Pathway,
            learning the foundations of Javascript, React, Node.js, Git, and
            testing.{' '}
            <Link to="/front-end-developer">Read about my journey here.</Link>
          </p>
        </div>
      </Section>
      <Section>
        <div className="container aboutstuff ">
          <h2 className="sticky">Skills</h2>
        </div>
        <div className="container aboutstuffright">
          <h2>Graphic & UX Design</h2>
          <br></br>
          <p>
            Design and direction for brand systems, web, print, campaigns,
            publications, and pitches. Web user flows, wireframes, interactive
            mockups. Typography, graphics, layouts, light copywriting and
            photography.
          </p>
          <br></br>
          <br></br>
          <h2>Frontend Development</h2>
          <br></br>
          <p>
            Front end development for static and single page applications, for
            ecommerce, business, personal.
          </p>
        </div>
      </Section>
      <Section>
        <div className="container aboutstuff ">
          <h2 className="sticky">Tools</h2>
        </div>
        <div className="container aboutstuffright">
          <div className="flex">
            <div className="fifty">
              <h2>Design</h2>
            </div>

            <div className="fifty">
              <h2>Figma</h2>
              <h2>Illustrator</h2>
              <h2>Photoshop</h2>
              <h2>Indesign</h2>
              <h2>AfterEffects</h2>
              <h2>Adobe XD</h2>
              <h2>Webflow</h2>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="flex">
            <div className="fifty">
              <h2>Development</h2>
            </div>

            <div className="fifty">
              <h2>HTML / CSS / JavaScript</h2>
              <h2>React</h2>
              <h2>Node.js</h2>
              <h2>Gatsby</h2>
              <h2>Git / Github</h2>
              <h2>Netlify</h2>
              <h2>Firebase</h2>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container aboutstuff ">
          <h2 className="sticky">Contact</h2>
        </div>
        <div className="container aboutstuffright">
          <h2>
            Please don't hesitate to{' '}
            <a href="mailto:mylesjeffery96@gmail.com">reach out</a> with any
            questions or proposals! You can also find me on{' '}
            <a
              href="https://www.linkedin.com/in/myles-jeffery/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/mylesjeffery"
              target="_blank"
              rel="noreferrer"
            >
              Github.
            </a>{' '}
            <br></br>
            <br></br>
            Download a copy of my resume{' '}
            <a
              href="/uploads/mylesjeffery_resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </h2>
          <br></br>
        </div>
      </Section>
    </AboutContainer>
  )
}
