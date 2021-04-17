import React from 'react'
import styled from 'styled-components/macro';
import { setColor } from '../../stlyes';


const Section = styled.section`
width:100%;
height:100%;


`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/3);
display: grid;
grid-template-columns:1fr 1fr 1fr;
background-color:${setColor.primaryColor};

@media screen and (max-width:768px){
grid-template-columns:1fr;
margin-top:-3rem;
p{
    padding-bottom:2rem;
}

}
`
const DisplaySection = styled.div`
padding:0 1rem;
text-align:center;


h2{
    font-size:3.5rem;
}

p{
    color:${setColor.mainWhite}
}

`

const InfoSection = ({ infoSection }) => {


    return <Section>
        <Container className="fadeInUp">
            {infoSection.map((item, index) => {
                const { heading, icon, paragraph } = item;

                return <DisplaySection key={index}>
                    <h2> {icon}</h2>
                    <div>
                        <h3>{heading}</h3>
                        <p>{paragraph}</p>
                    </div>

                </DisplaySection>
            })}
        </Container>
    </Section>
}

export default InfoSection
