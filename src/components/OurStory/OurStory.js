import React from 'react'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';
import { setColor } from '../../stlyes';

const Section = styled.section`
width:100%;
height:100%;
padding-top:4rem;
background-image: url(${img__bg});
`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;

@media screen and (max-width:768px){
grid-template-columns:1fr;
margin-top:5rem;
grid-row-gap:3rem;
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
height:90%;
margin-top:2rem;
background: rgba(0, 0, 0, 0.5);
margin-left: -150px;
h1{
padding-top:4rem;
padding-bottom:1rem;
/* font-size:clamp(3.5rem, 4vw,2rem); */
color:${setColor.primaryColor}

}
p{
    margin-bottom:2rem;
    color: #fff;
}

@media screen and (max-width:768px){
    
    margin-left: 0;
    h1{
        margin-top:3rem;
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


@media screen and (max-width:768px){
    order:${({ reverse }) => (reverse ? '1' : '2')};
    padding:0;
    padding-top:9rem;
}
img {
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const Quote = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
text-align:center;
h3{
    color:white;
    width:80%;
}
`

const OurStory = ({
    heading,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    imgUrl,
    reverse
}) => {
    return <Section>
        <Quote>
            <h3>И най-безуспешният и гибелен ден изглежда приятен през синия ароматен дим на хаванска пура.</h3>
        </Quote>
        <Container>
            <ColumnLeft reverse={reverse}>
                <img src={imgUrl} alt="img" />
            </ColumnLeft>
            <ColumntRigth>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <p>{paragraphThree}</p>

            </ColumntRigth>

        </Container>
    </Section>
}

export default OurStory
