import React from "react"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Team = () => {
  return <Layout>meet our team page</Layout>
}

export const query = graphql`
  query {
    backgroundFile: file(relativePath: { eq: "kitchen.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Team
