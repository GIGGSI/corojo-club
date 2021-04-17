import React from 'react'
import styled from 'styled-components/macro';
import { setFlex, setColor, setFont } from '../../stlyes';

const JuliaHero = () => {
    return <Section>
        <Container>
            <h4>Коя е </h4>
            <h1> julia? </h1>

        </Container>

    </Section>
}

const Section = styled.section`
width:100%;
height:100%;
padding-top:4rem;
text-align:center;
${setFlex({})};
background:#FFBFB3;
;
`
const Container = styled.div`
display: grid;
grid-template-columns:1fr;
justify-content:center;
color:${setColor.mainWhite};

h1{
font-size:5.3rem; 
${setFont.slanted};
text-transform:uppercase;
}

h4{
margin-bottom:1rem;
    font-size:2.3rem;
}

`

export default JuliaHero
