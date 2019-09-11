import React from "react"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Contacts from '../components/Contact/Contact'

const Contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.backgroundFile.childImageSharp.fluid}>
        <Banner title="Contact Us"/>
      </StyledHero>
      <Contacts/>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    backgroundFile: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
