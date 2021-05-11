import styled from 'styled-components'
import { setFont, media } from '../../../stlyes'

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

export default CigarWrapper