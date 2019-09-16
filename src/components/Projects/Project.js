import React from "react"
import Img from "gatsby-image"
import styles from "../../css/tour.module.css"
import styles1 from '../../css/projects.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Project = ({ project }) => {
  const { name, short, mainPic, slug, province } = project

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainPic.fluid} className={styles.img} alt="project" />
        <AniLink fade className={styles.link} to={`/projects/${slug}`}>Details</AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <h4 className={styles.country}>
          {province}
        </h4>
        
      </div>
    </article>
  )
}

export default Project
