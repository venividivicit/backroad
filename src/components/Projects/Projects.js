import React from "react"
import ProjectList from './ProjectList'
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
    projects: allContentfulProject {
      edges {
        node {
          name
          description {
            description
          }
          short
          location {
            lon
            lat
          }
          province
          mainPic {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slug
        }
      }
    }
  }
`

const Projects = () => {
  const  {projects}  = useStaticQuery(getProjects)
  
  return <ProjectList projects={projects} />
}

export default Projects
