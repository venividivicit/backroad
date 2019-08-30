import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.backgroundFile.childImageSharp.fluid}>
        <Banner
          title="Construction Services"
          info="The best construction company in Maryland, Virginia and Washington DC."
        >
          <Link to="/projects" className="btn-white">
            Explore Projects
          </Link>
          {/* <Link style={{display:'block'}} to="/contact" className="btn-primary">
            get a quote
          </Link> */}
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
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
