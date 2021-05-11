import styled from "styled-components"
import { setColor } from '../../../stlyes'


const SingleCigarContainer = styled.div`
a {text-decoration: none;
  
}

text-align:center;
h3{
    color:${setColor.primaryColor};
    padding-top:1rem;
}

img {
   width:30%;
   transition:all 0.2s linear;
   &:hover{
       transform:scale(1.05) translateY(-1rem);
   }    
}

p{
    color:${setColor.mainWhite};
    padding-bottom:1rem;
    
}

`
export default SingleCigarContainer