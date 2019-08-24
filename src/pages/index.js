import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/Simple-hero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from '../components/Home/About'
import Services from '../components/Home/Services'



const Index = () => {
  return (
    <Layout>
      <SimpleHero>
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
      </SimpleHero>
      <About/>
      <Services/>
    </Layout>
  )
}

export default Index
