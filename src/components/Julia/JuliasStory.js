import React from 'react'
import styled from 'styled-components/macro';
import { setColor, setFont, media } from '../../stlyes';
import { juliasData } from '../../data/JuliasData'


const JuliasStory = () => {
    return <Section>
        <HeaderSections>
            <h2>Запознай се с Julia</h2>
        </HeaderSections>
        <Container>
            {juliasData.map((item, index) => {
                return <ContainerInfo key={index} className={item.className ? 'demo' : null}>

                    <div>
                        <img src={item.imgUrl} alt="julias pic" />

                    </div>
                    <div className="text__info">
                        <p>{item.paragraphOne}</p>
                        <p>{item.paragraphTwo}</p>
                    </div>

                </ContainerInfo>
            })}

        </Container>
    </Section>
}
const Section = styled.section`
text-align:center;
padding:1rem 3rem;
width:100%;
height:100%;
padding-top:4rem;

`;

const HeaderSections = styled.div`
${setFont.slanted};
color:${setColor.mainBlack};
font-size:1.5rem;

${media.tablet`
grid-template-columns:1fr  ;
padding-bottom:5rem;
`}
`


const Container = styled.div`
padding: 6rem calc((100vw - 1300px)/ 3);
 display: grid;
/* grid-template-columns:1fr 1fr ; */ 
 align-items: center;
  justify-content: center;
 row-gap:1rem;
 padding:0rem 4rem;


/*mobie veiw*/
${media.tablet`
 /* grid-template-columns:1fr ;  */
margin-top:5rem;
grid-row-gap:3rem;

.demo{
    display: flex;
  flex-direction: row-reverse;
}


`}


`

const ContainerInfo = styled.div`

display: grid;
grid-template-columns:1fr;
.text__info p{
    padding-top:3rem;
}
img {
height:25rem;
}

${media.tablet`
grid-template-columns:1fr 1fr;
grid-row-gap:3rem; 
margin-top:-5rem;

.text__info p{
    padding-top:5rem;
}

`} 

`
export default JuliasStory
