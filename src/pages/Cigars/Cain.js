import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import imgBg from '../../images/cain.png'
import { CainData } from '../../data/Cain'
import Banner from '../../components/Globals/SectionHero/Banner'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Cain = () => {
    const [data, setData] = useState(CainData)
    return <>
        <SectionSinglePageCigar img={imgBg} >
            <Banner
                greeting="Ръчно изработени пури Cain"
                text=" от компанията за пури Oliva в Никарагуа и са известни със смели вкусове и средни до пълноценни профили, които се гордеят с много дълбочина и плътност"
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Любителите на пури, които предпочитат малко допълнителен удар в любимите си пури, търсят Каин за надеждна конструкция и дълбоки, земни подправки. Cain пурите традиционно се смесват със солиден асортимент от никарагуански тютюни ligaro, които създават богати, различни вкусове и командват внимание.
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
