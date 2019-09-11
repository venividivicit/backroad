import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"

const Services = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.backgroundFile.childImageSharp.fluid}>
        <Banner title="Services"></Banner>
      </StyledHero>
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
  }
`
