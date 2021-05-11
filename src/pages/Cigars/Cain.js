import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import imgBg from '../../images/cain.png'
import Banner from '../../components/Globals/SectionHero/Banner'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Cain = () => {
    const [data, setData] = useState([])
    return <>
        <SectionSinglePageCigar img={imgBg} >
            <Banner />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Nub
                </p>
            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/cain/${item.id}`} >
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

export default Cain
