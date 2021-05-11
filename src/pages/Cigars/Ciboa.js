import React from 'react'
import { Link } from 'react-router-dom'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'

import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import CiboaImg from '../../images/ciboa.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import styled from 'styled-components'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Ciboa = () => {
    const [data, setData] = React.useState([])
    return <>
        <SectionSinglePageCigar img={CiboaImg} >
            <Banner geretin="Ciboa" />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Ciboa                </p>

            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/ciboa/${item.id}`} >
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
export default Ciboa
