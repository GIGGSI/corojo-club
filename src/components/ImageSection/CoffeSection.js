import React from 'react'
import styled from 'styled-components/macro';
import arabica from '../../images/arabica-aromatic.jpg';
import { setColor, setFont } from '../../stlyes';


const ImageSectionWrapper = styled.section`
background: url(${arabica}) no-repeat;
  background-size: cover;
  padding: 6rem 0;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  text-align:center;
  background-color:#B5E8D5;

  h2 {
  font-size: 1.8rem;
  padding:0 5rem;

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

const CoffeSection = () => {
    return <ImageSectionWrapper>

        <h2>
            "Усъвършенствахме печенето на всяка отделна съставка в нашата уникална смес."
        </h2>
    </ImageSectionWrapper>

}

export default CoffeSection
