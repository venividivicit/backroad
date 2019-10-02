import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "../../css/slider.module.css"
import img1 from '../../images/blogBcg.jpeg'

export default class Slider extends Component {
  render() {
    return (
      <Carousel showStatus={false} showThumbs={false}>
         <div>
          <img src={img1} className={styles.img} alt="picture"/>
          <p className="legend">test</p>
        </div>
        
        <div>
          <Img
            className={styles.img}
            fluid={this.props.img[0].fluid}
            alt="pic"
          />
          <p className="legend">test</p>
        </div>
        <div>
          <Img
            className={styles.img}
            fluid={this.props.img[1].fluid}
            alt="pic"
          />
          <p className="legend">test</p>
        </div>
        <div>
          <Img
            className={styles.img}
            fluid={this.props.img[2].fluid}
            alt="pic"
          />
          <p className="legend">test</p>
        </div>
      </Carousel>
    )
  }
}
