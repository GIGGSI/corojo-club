import React, { useState } from 'react'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import SectionInfo from '../../components/Globals/SectionHero/SectionInfo'
import { OliviaData } from '../../data/Olivia.js'
import { Link } from 'react-router-dom'

import BlogOliva from '../../images/blog-oliva.jpg'
import Banner from '../../components/Globals/SectionHero/Banner'
import styled from 'styled-components'

import Container from '../../components/Globals/SingleCigars/Container'
import Heading from '../../components/Globals/SingleCigars/Heading'
import SingleCigarContainer from '../../components/Globals/SingleCigars/SingleCigarContainer'



const Olivia = () => {
    const [data, setData] = useState(OliviaData)
    return <>
        <SectionSinglePageCigar img={BlogOliva}>
            <Banner
                greeting="Меланио Олива"
                text="отглежда първата си реколта от тютюн в Пинар дел Рио, Куба през 1886 г."
            />
        </SectionSinglePageCigar>
        <SectionInfo>
            <Heading>
                <p>
                    В началото на 1920 г. синът на Меланио Факундо Олива поема нарастващите операции. Факундо обработва тютюневите полета от семейство Олива в продължение на няколко десетилетия. Тъй като Куба беше превзета от комунистите, тютюневият пейзаж се промени. Синът на Факундо Жилберто Олива премина от отглеждане към посредничество за тютюн. В началото на 60-те натискът става твърде голям и Жилберто пътува от държава в страна в търсене на условията, за да пресъздаде този характерен кубински вкус.
                </p>

            </Heading>
            <Container>
                {data.map((item) => {
                    console.log(item)
                    return <SingleCigarContainer key={item.id}>
                        <Link to={`/olivia/${item.id}`} >
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

export default Olivia
