import React, { useState } from 'react'
import { useParams } from 'react-router'
import { ArturoFuenteData } from '../../data/ArturoFuente'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import Banner from '../../components/Globals/SectionHero/Banner'

import styled from 'styled-components'
import { setColor, media, setFont } from '../../stlyes'
import Box from './Box'


const SingleCigarArturoFuente = () => {
    const [data, setData] = useState(ArturoFuenteData);
    const [showInfo, setShowInfo] = useState(false);

    const { id } = useParams()

    const cigar = data.filter((item) => item.id === +id);

    if (!id) {
        return <h1>Loading....</h1>

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
const SingleCigarWrapper = styled.div` `

const CigarInfo = styled.div`

color:${setColor.mainBlack};
 padding:1rem 2rem;

 h1{
 text-align:center;
}

 p{
 padding-top:1rem;
}
${media.tablet`
padding:2rem 4rem;
`}

${media.desctop`
padding:1rem 6rem;
margin: auto;`}

`

const CigarWrapper = styled.div`
padding:2rem 2rem;

span{
 ${setFont.slanted};
color:#6e6a6a;
padding:0 1rem;
}

img{
     width:100%;
}

.img__cigar{
transition:all 0.4s ease-in-out;
     &:hover{
    transform: scale(1.01) translateY(-0.5rem);
    }
}

 h3{
color:#3f3e3e;
padding-top:1rem;

}

 ${media.desctop`
text-align:center;
h3{
text-align:left;
padding:0 8rem;
}
img {
 width:80%; 
}`}

  `

export default SingleCigarArturoFuente
