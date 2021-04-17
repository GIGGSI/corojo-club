import React from 'react'
import { CoffeData } from '../../data/CoffeData'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';

import { setFlex, setColor, setFont, media } from '../../stlyes';

const CoffeInfo = () => {
    const [data, setData] = React.useState(CoffeData);

    return <Section>
        <HeaderSections>
            <h1>Уникалната смес</h1>
            <p>
                Уникална смес от кафе от девет различни вида арабика, подбрана на полето от производителите на най-добрите ни култури. Симфония, която създава уникален вкус: перфектен баланс между кисел и горчив вкус, много широк ароматен профил, продължителен послевкус.
            </p>
        </HeaderSections>
        <Container>
            {data.map((item, index) => {
                return <ContainerInfo key={index} className={item.className ? 'demo' : null}>

                    <div className="img__info">
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

width:100%;
height:100%;
padding-top:4rem;
/* background: url(${img__bg}) center/cover fixed no-repeat; */
`;

const HeaderSections = styled.div`
${setFont.slanted};
color:${setColor.mainBlack};
h1{
    font-size:3rem;
    color:${setColor.primaryColor}
}
p{
    padding-bottom:1rem;
    color:${setColor.mainBlack}
}
${media.tablet`
grid-template-columns:1fr  ;
padding-bottom:5rem;
`}
`


const Container = styled.div`
 display: grid;
 align-items: center;
justify-content: center;
 row-gap:1rem;


/*mobie veiw*/
${media.tablet`
 /* grid-template-columns:1fr ;  */
margin-top:5rem;
grid-row-gap:3rem;

.demo{
    
    
display: flex;
  flex-direction: row-reverse;
  padding-top:5rem;
  
}

.demo .text__info {
    width:50%;
  
}
`}

`

const ContainerInfo = styled.div`

display: grid;
grid-template-columns:1fr;
.text__info p{
     color:${setColor.mainBlack};
     padding:0 4rem;
   
}
.img__info{
    height:30rem;
    width:100%;
}
img {
/* height:25rem; */
object-fit:cover;
height:100%;
width:100%;
}

${media.tablet`
grid-template-columns:1fr 1fr;
/* grid-row-gap:3rem;  */
/* margin-top:5rem; */

.text__info p{
    padding-top:2rem;
}

`} 

`

export default CoffeInfo
