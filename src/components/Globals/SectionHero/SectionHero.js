import React from 'react'
import styled from 'styled-components'
import { setColor, setFlex, setBackground } from '../../../stlyes'

const HeroSection = styled.header`
   min-height:100vh;
   ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
  ${setFlex({})};

`

export default HeroSection
