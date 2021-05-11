import styled from 'styled-components'
import { setColor } from '../../../stlyes'

const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr;
grid-gap:1rem;
color:${setColor.mainWhite};
/* grid-template-rows:800px; */

@media screen and (max-width:1100px){
grid-template-columns:1fr 1fr;

}
@media screen and (max-width:768px){
grid-template-columns:1fr;

}`;

export default Container;