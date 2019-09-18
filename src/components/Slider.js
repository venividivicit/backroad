import React from "react"
import AwesomeSlider from "react-awesome-slider"
import AwsSliderStyles from "../css/sass/styles.scss"

import Img from 'gatsby-image'

const Slider = ({data}) => {
  return (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      <div data-src="">
        <Img fluid={data}/>
      </div>
      <div>
        <Img fluid={data}/>
      </div>
      <div data-src="">
        <Img fluid={data}/>
      </div>
    </AwesomeSlider>
  )
}

export default Slider
