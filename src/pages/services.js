import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import Map from "../components/Maps/Map"
import Slider from '../components/Slider/SliderTwo'




const Services = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.backgroundFile.childImageSharp.fluid}>
        <Banner title="Services"></Banner>
      </StyledHero>
      <Map />
      <Slider image={data.images.edges}/>
    </Layout>
  )
}

export default Services

export const query = graphql`
  query {
    backgroundFile: file(relativePath: { eq: "services.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    images: allContentfulProject {
      edges {
        node {
          slider {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
