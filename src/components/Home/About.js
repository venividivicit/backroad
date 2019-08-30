import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "nice.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="kitchen"/>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Best in town</h4>
          <p>
            Proident in quis sit ipsum consectetur cillum nisi. Dolore veniam
            consectetur irure in officia nostrud exercitation excepteur pariatur
            anim.
          </p>
          <p>
            Magna deserunt est occaecat fugiat. Adipisicing excepteur qui elit
            laborum eu consectetur excepteur. Cillum dolor quis excepteur quis
            nisi voluptate ullamco consequat ea do ullamco fugiat. Ad minim
            magna anim ex elit laborum proident sint exercitation.
          </p>
          <Link to="/contact">
            <button type="button" className="btn-primary">
              Schedule Appoitment
            </button>
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
