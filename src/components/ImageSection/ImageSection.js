import React from 'react'
import styled from 'styled-components/macro';
import imgBg from '../../images/bg_2.jpg'
import { setColor } from '../../stlyes';


const ImageSectionWrapper = styled.section`
background: url(${imgBg}) no-repeat;
  background-size: cover;
  padding: 6rem 0;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  text-align:center;

  p {
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 3rem;
  color: ${setColor.mainBlack};
  margin-bottom:2rem;
}
`

const ImageSection = () => {
    return <ImageSectionWrapper>
        <p>
            "Животът е като пура, дълга колкото живота, за да се изпуши добре..."
        </p>
    </ImageSectionWrapper>

}

export default ImageSection
