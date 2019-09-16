import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import ProjectList from '../components/Projects/ProjectList'
import Project from '../components/Projects/Projects'

export default function Projects({ data }) {
  return (
    <Layout>
      <StyledHero img={data.backgroundFile.childImageSharp.fluid}>
        <Banner title="Projects"></Banner>
      </StyledHero>
      <ProjectList/>
      {/* <Project/> */}
      
    </Layout>
  )
}

export const query = graphql`
  query {
    backgroundFile: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
