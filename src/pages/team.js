import React from "react"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const Team = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.backgroundFile.childImageSharp.fluid}>
        <Banner title="Our Team"></Banner>
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    backgroundFile: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Team
