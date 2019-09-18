import React from "react"
import AwesomeSlider from "react-awesome-slider"
import img from "../images/projects/pup.jpg"
import AwsSliderStyles from "../css/sass/styles.scss"

const Slider = () => {
  return (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      <div data-src={img} />
      <div data-src={img} />
      <div data-src={img} />
    </AwesomeSlider>
  )
}

export default Slider
