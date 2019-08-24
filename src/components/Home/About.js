import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/nice.jpg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="kitchen" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Best in town</h4>
          <p>
            Proident in quis sit ipsum consectetur cillum nisi. Dolore veniam
            consectetur irure in officia nostrud exercitation excepteur pariatur
            anim.
          </p>
          <p>
            Magna deserunt est occaecat fugiat. Adipisicing excepteur qui elit
            laborum eu consectetur excepteur. Cillum dolor quis excepteur quis
            nisi voluptate ullamco consequat ea do ullamco fugiat. Ad minim
            magna anim ex elit laborum proident sint exercitation.
          </p>
          <button type="button" className="btn-primary">Schedule Appoitment</button>
        </article>
      </div>
    </section>
  )
}

export default About
