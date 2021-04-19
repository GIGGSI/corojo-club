import React from 'react'
import styled from 'styled-components'
import { setColor, setFlex, setBackground } from '../../../stlyes'

const SectionSinglePageCigar = styled.header`
   min-height:80vh;
   ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
  ${setFlex({})};

`

export default SectionSinglePageCigar
