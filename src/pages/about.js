import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, Head } from '../components'

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
      <Img fluid={data.file.childImageSharp.fluid} alt="Me" />
      <figcaption>
        <em>
          not really just another brick in the wall... Please note the top
          brick!{' '}
        </em>
      </figcaption>
      <br></br>
      <h2>
        Education{' '}
        <span role="img" aria-label="emoji">
          ✏️
        </span>{' '}
      </h2>
      <h3>Parsons School of Design → Graduated Spring 2020</h3>
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
        learned to create digital experiences that evoke a brand's identity
        through interaction, layout, and typography.
      </p>
      <br></br>
      <h3>Front End Development → Spring 2020 – Present</h3>
      <p>
        After graduation, I moved back to the west coast and devoted my lockdown
        to learning front end development. With a background in HTML and CSS, I
        followed Scrimba's Front End Development Pathway, learning the
        foundations of Javascript, React, Node.js, Git, and testing. I put these
        skills to practice in a few projects, a few of which are featured{' '}
        <Link to="/front-end-developer">here</Link>.
      </p>
      <br></br>
      <hr></hr>
      <h2>
        Skills{' '}
        <span role="img" aria-label="emoji">
          🚀
        </span>
      </h2>
      <p>
        Design and direction for brand systems, web, print, campaigns,
        publications, and pitches. Web user flows, wireframes, interactive
        mockups. Typography, graphics, layouts, light copywriting and
        photography.
      </p>
      <p>
        Front end development for static and single page applications, for
        ecommerce, business, personal.
      </p>{' '}
      <p>
        Beyond technical skills and my desire to continuously learn, I am
        empathic, diligent, team and results oriented.
      </p>
      <br></br>
      <hr></hr>
      {/* <h2>
        Experience{' '}
        <span role="img" aria-label="emoji">
          💪
        </span>
      </h2>
      <h3></h3>
      <h4>February → April 2021</h4>
      <p>
        I worked with two other developers to build a single page application
        using React, JWT authentication, the Google Maps API and the iNaturalist
        API. Check it out{' '}
        <a
          href="https://mycolocate.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . Working within a team setting cemented the Git workflow, Agile
        methodology.
      </p>
      <h3>Freelance Designer </h3>
      <h4>2019 → Present</h4>
      <p>
        I've worked on a few freelance projects, including Parcark, a brand
        identity and user experience for a next generation parking app. Case
        study <Link to="/parcark">here</Link>.
      </p>
      <br></br>
      <hr></hr> */}
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
          <td>Webflow</td>
          <td>Firebase</td>
        </tr>
      </table>
      <br></br>
      <h2>
        Contact{' '}
        <span role="img" aria-label="emoji">
          📨
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
