import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import imgBg from '../../images/blog-arturoFuente.png'
import Banner from '../../components/Globals/SectionHero/Banner'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import styled from 'styled-components'
import { setColor } from '../../stlyes'
import { ArturoFuenteData } from '../../data/ArturoFuente.js'
import { Link } from 'react-router-dom'



const ArturoFuente = () => {
    const [data, setData] = useState(ArturoFuenteData);

    console.log(data)
    return <>
        <SectionSinglePageCigar img={imgBg}>
            <Banner greeting="Пурите Arturo Fuente"
                text=" постоянно се класират сред най-добрите пури в света. Репутацията ни за ненадминато качество, както с вкус, така и с конструкция, събра лоялни последователи сред ценителите на пурите."
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>

                <p>
                    От самото начало фокусът при производството на пура Fuente беше на качеството; качествен тютюн, качествена изработка и отделяне на времето, необходимо за направата на наистина забележителна пура. „Ние не бързаме с нещата; ние просто правим нещата така, както се предполага. " казва Карлос Фуенте старши
                </p>
                <p>
                    100 години по-късно, горяща страст към пурите продължава да вдъхновява семейство Фуенте. Докато предават на децата си културата и традициите на Артуро Фуенте, семейство Фуенте ще продължи да произвежда най-добрите пури в света за идните поколения.
                </p>
            </Heading>
            <Container>

                {data.map((item) => {
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/arturo-fuente/${item.id}`} >
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

export default ArturoFuente
