import React from "react"
import Img from "gatsby-image"
import styles from "../../css/tour.module.css"
import styles1 from '../../css/projects.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Project = ({ project }) => {
  const { name, short, mainPic } = project

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainPic.fluid} className={styles.img} alt="project" />
      </div>
    </article>
  )
}

export default Project
