import styled from 'styled-components'
import { setColor, media } from '../../../stlyes'

const Container = styled.div`

padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr;
grid-gap:1rem;
color:${setColor.mainWhite};
margin:auto 0;
/* grid-template-rows:800px; */


${media.tablet`
grid-template-columns:1fr 1fr;

`}

${media.desctop`
grid-template-columns:1fr 1fr 1fr 1fr;

`}

`;


export default Container;