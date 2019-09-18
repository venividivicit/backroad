import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

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
      <StyledHero img={mainPic.fluid}/>
        <>
          <h1>{name}</h1>
          <p>{description}</p>
        </>
      
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
