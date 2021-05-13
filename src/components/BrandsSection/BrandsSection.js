import React from 'react'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';
import { BrandsSectionData } from '../../data/BrandsSectionData';
import { Link } from 'react-router-dom';
import { setColor } from '../../stlyes';

const Section = styled.section`
text-align:center;
padding:1rem 3rem;
width:100%;
height:100%;
padding-top:4rem;
background-image: url(${img__bg});
`
const Container = styled.div`
padding: 4rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr;
row-gap:2rem;

@media screen and (max-width:768px){
grid-template-columns:1fr 1fr;
margin-top:5rem;
grid-row-gap:3rem;
}
`
const Heading = styled.div`

h1{
    font-size:3rem;
        color:${setColor.primaryColor}
}
p{
    padding-top:3rem;
    color:white;
}

`
export const BrandsInfo = styled(Link)`
text-decoration:none;
transition: 0.3s;
justify-content:center;
align-items:center;

img {
height:7rem;
}

h3{
    color:white;
}

&:hover{
    transform:  translateY(-0.5rem);
}

`

const BrandsSection = () => {

    return <Section>
        <Heading>
            <h1>Марки </h1>
            <p>
                Кутии за пури, пакети, пакети, семплери и още ...
                Ние носим пури за всички вкусове и предпочитания в Corojo Club.
                Независимо дали търсите пура за специален повод, или ежедневна първокласна пура.
                Можете да намерите пури, като издания с ограничено издание, или пури с първокласни
                пълнители с дълги листа от различни страни по света.
            </p>
        </Heading>
        <Container>
            {BrandsSectionData.map((item, index) => {

                return <BrandsInfo key={index} to={item.path}>
                    <img src={item.imgUrl} alt={item.name} />
                    <h3>{item.name}</h3>
                </BrandsInfo>
            })}

        </Container>
    </Section>
}

export default BrandsSection
