import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
// import Slider from '../components/Slider'

const Template = ({ data }) => {
  const {
    name,
    description: { description },
    location: { lat, lon },
    province,
    mainPic,
  } = data.contentfulProject

  return (
    <Layout>
      <StyledHero img={mainPic.fluid} />
      <div className={styles.template}>
        <div className={styles.templateCenter}>
          <h1 className={styles.header}>{name}</h1>
          <h1 className={styles.item}>dummy text</h1>
          <p className={styles.item}>{description}</p>
        </div>
      </div>
      {/* <Slider data={mainPic.fluid}/> */}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      description {
        description
      }
      location {
        lat
        lon
      }
      mainPic {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      province
    }
  }
`

export default Template
