import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"



export default class Services extends Component {
  render() {
    return (
      <Layout>
        this is the Services page
      </Layout>
    )
  }
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
