import React from 'react'
import styled from 'styled-components/macro';
import julia4 from '../../images/julia4.png';
import { setColor, setFont } from '../../stlyes';


const ImageSectionWrapper = styled.section`
background: url(${julia4}) no-repeat;
  background-size: cover;
  padding: 6rem 0;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  text-align:center;
  background-color:#B5E8D5;

  h2 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 3rem;
  color: ${setColor.mainWhite};
  margin-bottom:2rem;
  ${setFont.slanted}
  -webkit-text-stroke: 1px black;
   text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
}
`

const JuliaImageSection = () => {
    return <ImageSectionWrapper>

        <h2>
            "Julia има нещо за теб!"
        </h2>
    </ImageSectionWrapper>

}

export default JuliaImageSection
