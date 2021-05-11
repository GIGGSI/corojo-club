import styled from 'styled-components'
import { setColor, media } from '../../../stlyes'

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

export default CigarInfo;