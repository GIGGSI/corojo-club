import React from 'react'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';
import { setColor } from '../../stlyes';
import Form from './Form'

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
grid-template-rows:600px;

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
/* background: rgba(0, 0, 0, 0.5);
margin-left: -150px; */
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
padding:0 2rem;
order:${({ reverse }) => (reverse ? '2' : '1')};
display:grid;
grid-template-columns:1fr;
justify-content:center;
align-items:center;


/* @media screen and (max-width:768px){
    order:${({ reverse }) => (reverse ? '1' : '2')};
    padding:0;
    padding-top:9rem;
} */
h4{
    color:${setColor.mainWhite}
}
h3{
    color:${setColor.mainWhite}  
}
p{
    color:${setColor.mainWhite}
}
`

const ContactsContainer = () => {
    return <Section>
        <Container>
            <ColumnLeft>
                <h4>Свържете се с консултант от Corojo Club относно: </h4>
                <div>
                    <p> въпроси за продукти</p>
                    <p>включване във ваше събитие</p>
                    <p>консултация при избор на подарък  </p>
                    <p>бизнес сътрудничество</p>
                </div>
                <h3>Corojo Club </h3>
                <p>бул. България 118</p>
                <p>Бизнес Център Абакус, ет. 2
                    1618 София, България</p>
                <p>Email за консултация: contact@corjoCLub.bg</p>
                <p>Email за корпоративни контакти: cojoroClub@corojo.bg </p>
                <p>Тютюневи продукти не могат да бъдат закупени онлайн.
                    За консултация можете да се свържете с продуктовите
                    специалисти от La Casa del Habano и Premium Cigars & Tobacco на: М.+359 878282554, 0877209933, 0879232004; Т. +359 2 9531180,</p>
            </ColumnLeft>
            <ColumntRigth>
                <Form />
            </ColumntRigth>

        </Container>
    </Section>
}

export default ContactsContainer
