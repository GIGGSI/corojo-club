import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import laGarela from '../../images/laGarela.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import { LaGarelaData } from '../../data/LaGarela'

import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'


const LaGarela = () => {
    const [data, setData] = useState(LaGarelaData)
    return <>
        <SectionSinglePageCigar img={laGarela}>
            <Banner
                greeting="La Galera Cigars"
                text="  La Galera предлага първокласни пури, произведени с експертизата, която само един от най-опитните и плодотворни производители на пури за всички времена може да произведе."
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Световноизвестният майсторски блендер Jose 'Jochy' Blanco прекара десетилетия като едно от най-уважаваните имена в бранша и през 2016 г. представи най-новото си творение: La Galera. Базирана от Tabacalera Palma в Доминиканската република.Богатото, сърдечно съчетание и безупречно майсторство са ред на деня и доставят в пика всеки път.                </p>
            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/la-garela/${item.id}`} >
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

export default LaGarela
