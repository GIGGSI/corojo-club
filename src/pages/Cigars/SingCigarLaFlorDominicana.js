import React, { useState } from 'react'
import { useParams } from 'react-router'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import Banner from '../../components/Globals/SectionHero/Banner'
import { LaFlorDominicanaData } from '../../data/LaFlorDominicana'

import styled from 'styled-components'
import Box from './Box'

import CigarInfo from '../../components/Globals/SingleCigars/CigarInfo'
import CigarWrapper from '../../components/Globals/SingleCigars/CigarWrapper'

const SingCigarLaFlorDominicana = () => {
    const [data, setData] = useState(LaFlorDominicanaData)
    const { id } = useParams()

    const cigar = data.filter((item) => item.id === +id);

    if (!cigar) {
        <h1>Loading....</h1>
    }
    return <>
        {cigar.map((item) => {
            const { id, title, subTitle, imgUrl, imagBg, paragraphOne, paragraphTwo, cigars, closedBox, openBox } = item;

            return <SingleCigarWrapper key={id}>
                <SectionSinglePageCigar img={imagBg}>
                    <Banner title={title} />
                </SectionSinglePageCigar>
                <CigarInfo>
                    <h1>Избор на пури</h1>
                    <p>{subTitle}</p>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                </CigarInfo>
                {cigars.map((cigar) => {

                    return <CigarWrapper key={cigar.id}>
                        <img src={cigar.img}
                            alt={cigar.title}
                            className="img__cigar" />

                        <h3>{cigar.title}
                            <span>{cigar.subtitle}</span> </h3>

                        <Box {...cigar} />
                    </CigarWrapper>
                })}


            </SingleCigarWrapper>

        })}

    </>
}

const SingleCigarWrapper = styled.div``;


export default SingCigarLaFlorDominicana
