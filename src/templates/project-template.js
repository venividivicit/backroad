import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Map from "../components/Maps/Map"


const Template = ({ data }) => {
  const {
    name,
    description: { description },
    //location: { lat, lon },
    //province,
    mainPic,
    slider,
  } = data.contentfulProject

  return (
    <Layout>
      <StyledHero img={mainPic.fluid} />
      <div className={styles.template}>
        <div className={styles.templateCenter}>
          <h1 className={styles.header}>{name}</h1>
         
          <p className={styles.item}>{description}</p>
          <Map />
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
      slider {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      province
    }
  }
`

export default Template
