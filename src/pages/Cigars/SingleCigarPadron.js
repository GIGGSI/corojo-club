import React, { useState } from 'react'
import { useParams } from 'react-router'
import SectionSinglePageCigar from '../../components/Globals/SectionHero/SectionSinglePageCigar'
import { PadronData } from '../../data/Padron'
import Banner from '../../components/Globals/SectionHero/Banner'
import styled from 'styled-components'
import { media, setColor, setFlex, setFont } from '../../stlyes'

import { BsFillCaretRightFill, BsFillCaretUpFill } from 'react-icons/bs'


const SingleCigarPadron = () => {
    const [data, setData] = useState(PadronData)
    const [showInfo, setShowInfo] = useState(false);
    const { id } = useParams();

    const cigar = data.filter((item) => item.id === +id);

    if (!id) {
        return <h1>Loading...</h1>
    }


    return <>
        {cigar.map((item) => {
            console.log(item)
            const { id, title, subTitle, imgUrl, imagBg, paragraphOne, paragraphTwo, cigars, closedBox, openBox } = item;
            return <SingleCigarWrapper key={id}>
                <SectionSinglePageCigar img={imagBg} >
                    <Banner title={title} />
                </SectionSinglePageCigar>
                <CigarInfo>
                    <h1>Избор на пури</h1>
                    <p>{subTitle}</p>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                </CigarInfo>
                {cigars.map((cigar, index) => {
                    return <CigarWrapper key={index}>

                        <img src={cigar.img} alt={cigar.title} />

                        <h3>{cigar.title}   <span>{cigar.subtitle}</span></h3>

                        <Box>
                            <h3
                                onClick={() => setShowInfo(!showInfo)}>
                                {showInfo ? <BsFillCaretUpFill /> : <BsFillCaretRightFill />}
                                Какво има в кутията?
                            </h3>
                            {showInfo ? <BoxImgWrapper>
                                <div className="img__container">
                                    <img src={cigar.openBox} alt={title} />

                                </div>
                                <div className="img__container">
                                    <img src={cigar.closedBox} alt={title} />

                                </div>
                            </BoxImgWrapper> : ''}
                        </Box>
                    </CigarWrapper>
                })}

            </SingleCigarWrapper>
        })}
    </>
}

const SingleCigarWrapper = styled.div`

`

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
margin: auto;
 


`}


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
    transition:all 0.4s ease-in-out;
    &:hover{
        transform: scale(1.01) translateY(-0.5rem);
    }
}
h3{
    color:#3f3e3e;
    padding-top:1rem;
  
    
}

${media.tablet`

`}

${media.desctop`
text-align:center;
h3{
    text-align:left;
    padding:0 8rem;
 

}
img {
 width:80%; 
}

`}
`

const Box = styled.div`
width:80%;
border-bottom: 2px solid #D4D4D4;

h3 {
    ${setFont.slanted};
    &:hover {
        cursor: pointer;
    }
}
img {

background:red;
}
`

const BoxImgWrapper = styled.div`
width:100%;
text-align:center;
display:grid;
grid-template-columns:1fr;

.img__container{
    text-align:center;
}
img {
    /* text-align:center; */
    width:40%;
}


${media.desctop`
grid-template-columns:1fr 1fr;

img {
    width:60%;
}
`}


`

export default SingleCigarPadron
