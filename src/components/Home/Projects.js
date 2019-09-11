import React from "react"
import Title from "../Title"
import styles from "../../css/projects.module.css"
import projects from "../../constants/projects"
import img1 from "../../images/projects/slide.jpeg"
import Img from "gatsby"

const Projects = ({ img }) => {
  console.log(img)
  return (
    <section className={styles.projects}>
      <Title title="Our" subtitle="Projects" />

      <div className={styles.projectsCenter}>
        {projects.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <img src={img1} alt="pups" />
              
              <div className={styles.info}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>Learn More</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
