import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import imgBg from '../../images/blog-arturoFuente.png'
import Banner from '../../components/Globals/SectionHero/Banner'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import styled from 'styled-components'
import { ArturoFuenteData } from '../../data/ArturoFuente.js'
import { Link } from 'react-router-dom'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'


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

const CardSide = styled.div`

`;
const CardBack = styled.div`

`;

export default ArturoFuente
