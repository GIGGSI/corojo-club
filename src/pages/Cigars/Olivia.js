import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import { OliviaData } from '../../data/Olivia.js'
import { Link } from 'react-router-dom'

import BlogOliva from '../../images/blog-oliva.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import styled from 'styled-components'
import { setColor } from '../../stlyes'

const Olivia = () => {
    const [data, setData] = useState(OliviaData)
    return <>
        <SectionSinglePageCigar img={BlogOliva}>
            <Banner
                greeting="Меланио Олива"
                text="отглежда първата си реколта от тютюн в Пинар дел Рио, Куба през 1886 г."
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    В началото на 1920 г. синът на Меланио Факундо Олива поема нарастващите операции. Факундо обработва тютюневите полета от семейство Олива в продължение на няколко десетилетия. Тъй като Куба беше превзета от комунистите, тютюневият пейзаж се промени. Синът на Факундо Жилберто Олива премина от отглеждане към посредничество за тютюн. В началото на 60-те натискът става твърде голям и Жилберто пътува от държава в страна в търсене на условията, за да пресъздаде този характерен кубински вкус.
                </p>

            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/olivia/${item.id}`} >
                            <CardSide>

                                <img src={item.imgUrl} alt={item.title} />
                            </CardSide>
                            <CardBack>
                                <Heading>
                                    <h3>{item.title}</h3>
                                </Heading>
                                <p>{item.subTitle.length > 120 ? item.subTitle.slice(0, 120) + '...' : item.subTitle}</p>
                            </CardBack>
                        </Link>

                    </SingleCigarContainer>
                })}
            </Container>
        </SectionInfo>
    </>
}

const Heading = styled.div`
p{
    color:${setColor.mainWhite};
    padding:1rem 3rem;
}
text-align:center;

`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:1rem;
color:${setColor.mainWhite};
/* grid-template-rows:800px; */



@media screen and (max-width:1100px){
grid-template-columns:1fr 1fr;

}
@media screen and (max-width:768px){
grid-template-columns:1fr;

}`;

const SingleCigarContainer = styled.div`
a {text-decoration: none;
  
}

text-align:center;
h3{
    color:${setColor.primaryColor};
    /* height:4rem; */
    padding-top:1rem;
}

img {
   width:30%;
   transition:all 0.2s linear;
   &:hover{
       transform:scale(1.05) translateY(-1rem);
   }    
}

p{
    color:${setColor.mainWhite};
    padding-bottom:1rem;
    
}
&:hover {
    /* -webkit-box-shadow: 5px 5px 10px 2px #000000; 
box-shadow: 5px 5px 10px 2px #000000; */
}

`
const CardSide = styled.div`

`;
const CardBack = styled.div`

`;

export default Olivia
