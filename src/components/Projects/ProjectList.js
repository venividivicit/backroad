import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Project from '../Projects/Project'

export default class ProjectList extends Component {
  state={
      projects:[],
      sorted:[]
  }

  componentDidMount(){
      this.setState({
          projects: this.props.projects.edges,
          sorted: this.props.projects.edges
      })
  }
  render() {
    return (
      <section className={styles.tours}>
          <div className={styles.center}>
              {
                  this.state.sorted.map(({node})=>{
                      return <Project key={node.slug} project={node}/>
                  })
              }
          </div>
      </section>
    )
  }
}
