import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import errorP from '../images/errorP.jpg';
import { Link } from 'react-router-dom'
import Banner from '../components/Globals/SectionHero/Banner'
import styled from 'styled-components/macro';
import { setColor } from '../stlyes';

const Underline = styled.div`
width: 20rem;
  height: 0.25rem;
  background: ${setColor.primaryColor};
  margin-left: auto;
  margin-right: auto;
  margin-top:1rem;

`

const Links = styled(Link)`
text-decoration:none;
text-transform:uppercase;
color:${setColor.mainWhite};

padding-bottom:4rem;
`
const Text = styled.div`
h3{
    padding-top:1rem;
}
`

const Errorpage = () => {
    return <>
        <SectionHero img={errorP}>
            <Banner greeting="404">
                <Links to='/'>
                    Back Home
                </Links>

                <Underline>

                </Underline>
                <Text>
                    <h3>The page is not found</h3>
                </Text>


            </Banner>
        </SectionHero>

    </>
}

export default Errorpage
