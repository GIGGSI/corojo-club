import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import laFlor from '../../images/laFlor.png'
import Banner from '../../components/Globals/SectionHero/Banner'
import { Link } from 'react-router-dom'
import { LaFlorDominicanaData } from '../../data/LaFlorDominicana'


import styled from 'styled-components'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'


const LaFlorDominicana = () => {
    const [data, setData] = useState(LaFlorDominicanaData)
    return <>
        <SectionSinglePageCigar img={laFlor} >
            <Banner greeting="La Flor Dominicana "
                text="са известни със своите иновативни форми и използването на тютюни, отглеждани във фермите на компанията в Доминиканската република"
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    В допълнение към основната си марка La Flor Dominicana, La Flor е познат за марки като Ligero, Double Ligero и Камерун.                </p>

            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/la-flor-dominicana/${item.id}`} >
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

export default LaFlorDominicana
