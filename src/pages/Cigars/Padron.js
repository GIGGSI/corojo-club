import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import BlogPadron from '../../images/blog-padron.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import { PadronData } from '../../data/Padron.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Padron = () => {
    const [data, setData] = useState(PadronData)

    return <>
        <SectionSinglePageCigar img={BlogPadron}>
            <Banner greeting="Padrón"
                title=""
                text="...са изминали дълъг път от 60-те години на миналия век и днес те се правят с обилна смесица от никарагуански тютюни, голяма част от които се отглеждат от семейство Padrón."
            >
            </Banner>
        </SectionSinglePageCigar>

        <SectionInfo>
            <Heading>
                <p>Серията 1964 Anniversary наистина поставя Padrón на картата на ценителите на пурите, когато е издаден през 1994 г. на 30-годишнината на компанията. За разлика от своите предшественици, тази пура беше силно притисната в кутия, запалвайки тенденция, притисната в кутията в индустрията за пури. Изключителните размери включват Exclusivo. Серия 1926 е създадена в чест на рождената година на основателя на компанията Хосе Орландо Падрон и е взела някои от най-големите отличия на Падрон. Padrón Dámaso, създаден през 2015 г., и са направени с еквадорски обвиващи листа, отгледани от семена на Кънектикът.</p>
            </Heading>
            <Container>

                {data.map((item) => {
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/padron/${item.id}`} >
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
export default Padron
