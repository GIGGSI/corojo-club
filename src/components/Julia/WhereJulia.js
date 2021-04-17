import React from 'react'
import styled from 'styled-components/macro';
import julia5 from '../../images/julia5.jpg';
import { setColor } from '../../stlyes';

const WhereJulia = () => {
    return <Section>
        <Container>
            <ColumnLeft>
                <img src={julia5} alt="julia pics" />
            </ColumnLeft>

            <ColumntRigth>
                <h2>КОГА И КЪДЕ?</h2>
                <p>Julia е идеална у дома, в ресторанти и барове, организирани партита, светски събирания, на плажа ...</p>
                <p>Студено поднесено в елегантната й чаша Julia.</p>
                <p>Насладете се на своята Julia най-добре с прекрасна компания.
                </p>
                <p>Нейната идея беше да донесе сварен аперитив, което е донесено с повече стил и елегантност, което също е много достъпно от гледна точка на вкус и умерено до ниско съдържание на алкохол.</p>
            </ColumntRigth>
        </Container>
    </Section>
}

const Section = styled.section`
width:100%;
height:100%;
padding-top:4rem;
`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr;

@media screen and (max-width:768px){
grid-template-columns:1fr;

/* grid-row-gap:3rem; */
}
`

const ColumntRigth = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
z-index: 2;
padding: 1rem 2rem;
order:${({ reverse }) => (reverse ? '2' : '1')};
height:70%;
margin-top:2rem;
h2{

padding-bottom:1rem;
/* font-size:clamp(3.5rem, 4vw,2rem); */
color:#CD853F;

}
p{
    margin-bottom:2rem;
    color: ${setColor.mainBlack}
}

@media screen and (max-width:768px){
    
    margin-left: 0;
    h1{
        font-size:2.5rem;

}
}

`
const ColumnLeft = styled.div`
padding:1rem 2rem;
order:${({ reverse }) => (reverse ? '2' : '1')};
display:flex;
justify-content:center;
align-items:center;

height:40rem;
@media screen and (max-width:768px){
    order:${({ reverse }) => (reverse ? '1' : '2')};
    padding:0;
    /* padding-top:9rem; */
}
img {
    width:100%;
    height:100%;
    object-fit:cover;
}
`
export default WhereJulia
