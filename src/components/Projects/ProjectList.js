import React from "react"
import Project from "../Projects/Project"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getFeaturedProjects = graphql`
  query {
    featured: allContentfulProject(filter: { ft: { eq: true } }) {
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

const ProjectList = () => {
  const response = useStaticQuery(getFeaturedProjects)
  const projects = response.featured.edges

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="projects" />
      <div className={styles.center}>
        {projects.map(({ node }) => {
          return <Project key={node.slug} project={node} />
        })}
      </div>

      <AniLink fade to="/projects" className="btn-primary">
        explore
      </AniLink>
    </section>
  )
}

export default ProjectList
