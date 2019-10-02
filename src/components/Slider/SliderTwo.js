import React from "react"
import AwesomeSlider from "react-awesome-slider"
import styles from "../../css/sass/slider.scss"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.div`
  width: 500px;
  height: 500px;
`
const Holder = styled.div`
  width: 500px;
  height: 500px;
`
const SliderTwo = ({ image }) => {
  console.log(image[0].node.slider[0].fluid)
  return (
    <Container>
      <AwesomeSlider cssModule={styles}>
        <Img fluid={image[0].node.slider[0].fluid} />

        <Img fluid={image[0].node.slider[1].fluid} />

        <Img fluid={image[0].node.slider[2].fluid} />
      </AwesomeSlider>
    </Container>
  )
}

export default SliderTwo
