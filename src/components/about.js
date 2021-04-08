import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const AboutContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .about-content {
    width: 60%;
    padding-right: 2rem;
    max-width: 750px;
  }

  #about-pic {
    width: 40%;
  }

  .tools {
    display: flex;
    align-items: top;
  }
  .tools-section {
    width: 50%;
    h2 {
      margin-top: 0;
    }
  }
  .contact {
    display: flex;
    width: 100%;
    h2 {
      margin-top: 0;
      margin-right: 2rem;
    }
  }
  .subtitle {
    font-size: 1.2rem;
  }
  @media (max-width: 750px) {
    display: block;
    .about-content {
      width: 100%;
      padding-right: 0;
      max-width: 750px;
    }
    #about-pic {
      width: 100%;
    }
  }
`

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img_1966.jpg" }) {
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
      <h1 className="neue">About</h1>
      <Container>
        <div id="about-pic">
          <Img fluid={data.file.childImageSharp.fluid} alt="Me" />
          <figcaption>
            <em>just another brick in the wall...</em>
          </figcaption>
          <br></br>
        </div>
        <div className="about-content">
          <h1>Education </h1>
          <h2>
            <span className="neue">Parsons School of Design → Grad. 2020</span>{' '}
            <br></br> I studied{' '}
            <a
              href="https://www.newschool.edu/parsons/bfa-integrated-design/"
              target="_blank"
              rel="noreferrer"
              className="neue"
            >
              Integrated Design
            </a>{' '}
            at Parsons, a multidisciplinary approach to design studies that
            combines various design methodologies to develop a holistic, hybrid
            practice. My focus was on the intersection of branding and user
            experience, as I learned to create digital experiences that evoke a
            brand's idenity through interaction, layout, and typography.
          </h2>
          <br></br>
          <hr></hr>
          <h1>What I Do </h1>
          <h2>
            <span className="neue">Design</span>
            <br></br>
            Design and direction for brand systems, web, print, campaigns,
            publications, and pitches. Web User flows, wireframes, interactive
            mockups. Typography, graphics, layouts, light copywriting and
            photography.
          </h2>
          <h2>
            <span className="neue">Development</span>
            <br></br>
            Front end development for static and dynamic websites, for
            ecommerce, business, personal. Jamstack websites with headless CMS,
            CDN.
          </h2>
          <br></br>
          <hr></hr>

          <h1>Experience </h1>
          <h2>
            <span className="neue">Chingu Voyage 28 - Mycolocate</span>
            <br></br>
            <span className="subtitle">February → April 2021</span>
            <br></br>I worked with two other developers via the Chingu platform
            to build a wild edible{' '}
            <a
              href="https://mycolocate.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="neue"
            >
              mushroom locator
            </a>
            .
          </h2>
          <h2>
            <span className="neue">Freelance Designer</span>
            <br></br>
            <span className="subtitle">2019 → Present</span>
            <br></br>I've worked on a few freelance projects for friends and
            acquaintances, including Parcark, a brand identity for a realtor,
            and an identity for a Depop Store.
          </h2>

          <br></br>
          <hr></hr>

          <h1>Tools </h1>
          <div className="tools">
            <div className="tools-section">
              <h2>
                <span className="neue">Design</span>
                <br></br>Figma
                <br></br>Illustrator
                <br></br>Photoshop
                <br></br>Indesign
                <br></br>AfterEffects
                <br></br>Adobe XD
                <br></br>Lightroom
              </h2>
            </div>
            <div className="tools-section">
              <h2>
                <span className="neue">Development</span>
                <br></br>HTML/CSS/JS
                <br></br>React
                <br></br>Node.js
                <br></br>Gatsby
                <br></br>Git & Github
                <br></br>Netlify
                <br></br>Firebase
              </h2>
            </div>
          </div>
          <br></br>
        </div>
      </Container>
    </AboutContainer>
  )
}
