import React from 'react'
import styled from 'styled-components'
import { setColor, setFlex, setBackground } from '../../../stlyes'
import img__bg from '../../../images/bg_4.jpg';


const SectionInfo = styled.div`
   /* min-height:80vh;
   ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
  ${setFlex({})}; */
  width:100%;
  min-height:100vh;
padding-top:4rem;
background-image: url(${img__bg});
`

export default SectionInfo
