import React, { useState } from 'react'
import styled from 'styled-components'
import { setFont, media, setColor } from '../../stlyes'
import { BsFillCaretRightFill, BsFillCaretUpFill } from 'react-icons/bs'



const Box = ({ title, closedBox, openBox }) => {
    const [showInfo, setShowInfo] = useState(false);

    return <BoxWrapper>
        <h3
            onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <BsFillCaretUpFill /> : <BsFillCaretRightFill />}
            Какво има в кутията?
        </h3>
        {showInfo ? <BoxImgWrapper>
            <div className="img__container">
                <img src={openBox} alt={title} />
            </div>
            <div className="img__container">
                <img src={closedBox} alt={title} />
            </div>


        </BoxImgWrapper> : null}
        {showInfo ? <div className="text">
            <h4>Padron Series {title} съдържа 26 къса в кутията </h4>
            <h4>Предлага се в натурален и мадуро</h4>
        </div> : null}

    </BoxWrapper>
}

const BoxWrapper = styled.div`
width:80%;
border-bottom: 2px solid #D4D4D4;

h3 {
    ${setFont.slanted};
    &:hover {
        cursor: pointer;
    }
}

.text {
    color:#7A7A7A;
    padding: 2rem 0;
    ${setFont.slanted}
}
`

const BoxImgWrapper = styled.div`
width:100%;
text-align:center;
display:grid;
grid-template-columns:1fr;
align-items:center;
text-align:center;
justify-content:center;
padding-top:1rem;

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
export default Box
