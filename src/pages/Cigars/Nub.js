import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NubData } from '../../data/Nub'

import NubCigar from '../../images/nub-cigars.jpg'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import Banner from '../../components/Globals/SectionHero/Banner'
import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Nub = () => {
    const [data, setData] = useState(NubData)
    return <>
        <SectionSinglePageCigar img={NubCigar}>
            <Banner greeting=" Nub пурите"
                text="се навиват в странно оформени, къси, силни формати, които станаха изключително популярни през последните години"
            />

        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Разнообразието от опаковки на пури Nub идва от добре познати региони, включително Никарагуа, Кънектикът и Камерун, докато цялостните вкусове традиционно отразяват среден до пълноценен никарагуански профил. Nub пурите са известни с хладно, бавно изгаряне, което компенсира по-късите им дължини. Ако сте любопитни към Nub, малко други пури ще се чувстват по същия начин в ръката или устата ви. Ароматизиран сорт, Nub Café, се отличава със сладки аромати на базата на кафе.
                </p>
            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/nub/${item.id}`} >
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

export default Nub
