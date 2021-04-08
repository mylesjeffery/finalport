import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, Head, Howdy } from '../components'

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
    <Layout>
      <Head title="About" />
      <Howdy />
      <Img fluid={data.file.childImageSharp.fluid} alt="Me" />
      <figcaption>
        <em>just another brick in the wall...</em>
      </figcaption>
      <br></br>

      <h2>
        Education{' '}
        <span role="img" aria-label="emoji">
          ✏️
        </span>{' '}
      </h2>
      <h3>Parsons School of Design → Graduated 2020</h3>
      <p>
        I studied{' '}
        <a
          href="https://www.newschool.edu/parsons/bfa-integrated-design/"
          target="_blank"
          rel="noreferrer"
        >
          Integrated Design
        </a>{' '}
        at Parsons, a multidisciplinary approach to design studies that combines
        various design methodologies to develop a holistic, hybrid practice. My
        focus was on the intersection of branding and user experience, as I
        learned to create digital experiences that evoke a brand's idenity
        through interaction, layout, and typography.
      </p>
      <br></br>
      <hr></hr>

      <h2>
        Expertise{' '}
        <span role="img" aria-label="emoji">
          🔬
        </span>
      </h2>
      <p>
        Design and direction for brand systems, web, print, campaigns,
        publications, and pitches. Web User flows, wireframes, interactive
        mockups. Typography, graphics, layouts, light copywriting and
        photography.
      </p>
      <p>
        Front end development for static and dynamic websites, for ecommerce,
        business, personal. Jamstack websites with headless CMS, CDN.
      </p>
      <br></br>
      <hr></hr>

      <h2>
        Experience{' '}
        <span role="img" aria-label="emoji">
          💪
        </span>
      </h2>
      <h3>Chingu Voyage 28</h3>
      <h4>February → April 2021</h4>
      <p>
        I worked with two other developers via the Chingu platform to build a
        wild edible mushroom locator.
      </p>
      <h3>Freelance Designer </h3>
      <h4>2019 → Present</h4>
      <p>
        I've worked on a few freelance projects for friends and acquaintances,
        including Parcark, a brand identity for a realtor, and an identity for a
        Depop Store.
      </p>
      <br></br>
      <hr></hr>

      <h2>
        Tools{' '}
        <span role="img" aria-label="emoji">
          🔧
        </span>{' '}
      </h2>
      <table>
        <tr>
          <th>Design</th>
          <th>Development</th>
        </tr>
        <tr>
          <td>Figma</td>
          <td>HTML5/CSS3/JS</td>
        </tr>
        <tr>
          <td>Illustrator</td>
          <td>React</td>
        </tr>
        <tr>
          <td>Photoshop</td>
          <td>Node.js</td>
        </tr>
        <tr>
          <td>Indesign</td>
          <td>Gatsby</td>
        </tr>
        <tr>
          <td>AfterEffects</td>
          <td>Git & Github</td>
        </tr>
        <tr>
          <td>Adobe XD</td>
          <td>Netlify</td>
        </tr>
        <tr>
          <td>Lightroom</td>
          <td>Firebase</td>
        </tr>
      </table>

      <br></br>

      <h2>
        Links{' '}
        <span role="img" aria-label="emoji">
          🔗
        </span>
      </h2>
      <ul>
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
      </ul>
    </Layout>
  )
}
