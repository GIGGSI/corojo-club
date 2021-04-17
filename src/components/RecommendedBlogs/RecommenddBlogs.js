import React from 'react'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';
import { recommendedBlogs } from '../../data/recommendedBlogs'
import { Link } from 'react-router-dom'
import { setColor } from '../../stlyes';



const Section = styled.section`
width:100%;
height:100%;
background-image: url(${img__bg});
text-align:center;
padding:1rem 3rem;
padding-top:4rem;
`
const Container = styled.div`
padding-top:6rem;
padding: 3rem calc((100vw - 1300px)/3);
display: grid;
grid-template-columns:1fr 1fr 1fr;
/* grid-template-rows:200px; */
justify-content:center;


@media screen and (max-width:768px){
grid-template-columns:1fr;
margin-top:-3rem;
}
`
const DisplaySection = styled.div`
padding-top:3rem;
transition: 0.3s;

a {
    text-decoration:none;
}
h1{
    padding:1.5rem 0;
    color:${setColor.mainWhite};
    font-size:2rem;
}

p{
    color:${setColor.mainWhite};
    padding-bottom:2rem;
}
img {
    height:15rem;
}
&:hover{
    transform :translateY(-1rem);
    cursor:pointer;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
     box-shadow: 5px 5px 15px 5px #000000;
}
`
const Heading = styled.div`
h1{
    font-size:2.5rem;
        color:${setColor.primaryColor}
}
p{
  padding:2rem;
    color:${setColor.mainWhite}
}

`
const RecommenddBlogs = () => {

    return <Section>
        <Heading>
            <h1>Препоръчани статии от блога ни </h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </Heading>
        <Container>
            {recommendedBlogs.map((item) => {
                const { heading, paragraph, path, id, imgUrl } = item;
                return <DisplaySection key={id}>
                    <Link to={path}>
                        <img src={imgUrl} alt={heading} />
                        <div>
                            <h1>{heading}</h1>
                            <p>{paragraph}</p>
                        </div>
                    </Link>
                </DisplaySection>
            })}
        </Container>
    </Section>
}

export default RecommenddBlogs
