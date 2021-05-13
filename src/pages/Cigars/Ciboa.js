import React from 'react'
import { Link } from 'react-router-dom'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import { CiboaData } from '../../data/Ciboa'

import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import CiboaImg from '../../images/ciboa.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import styled from 'styled-components'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'

const Ciboa = () => {
    const [data, setData] = React.useState(CiboaData)
    return <>
        <SectionSinglePageCigar img={CiboaImg} >
            <Banner greeting="Cibao Cigars "
                text="са кръстени на известната долина в Доминиканската република, която е добре известна със своите буйни плодородни полета, които дават естествено сладки, богати на вкус тютюни."
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    Blanco представя три линии ръчно изработени пури под марката Cibao, които са внимателно изработени с помощта на превъзходните тютюни, отглеждани в този ценен регион. И с меко и средно тяло по сила, Seleccion Especial Maduro се предлага наситено с вкусни аромати на подправки, шоколад, кафе и кедър, докато Seleccion Especial Connecticut, завършен със златисто-кафяв лист обвивка от Еквадор Кънектикът, предлага уникален и вкусен микс от какао, сметана, подправки и печени ядки. Почитателите на по-силните пури ще се насладят на оригиналния еквадорски сорт Habano, увит в пушача със смели и ароматни нюанси на масло, мед и кестен, изпъстрени с дълготраен кремообразен завършек. Всички пури на Cibao са конструирани безупречно, бавно горят и най-доброто от всички са на разумни цени!
                </p>

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
