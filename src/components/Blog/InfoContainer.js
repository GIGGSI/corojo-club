import React, { useState } from 'react'
import styled from 'styled-components/macro';
import img__bg from '../../images/bg_4.jpg';
import { BlogData } from '../../data/BlogData';
import { setColor } from '../../stlyes';
import { Link } from 'react-router-dom'


const Section = styled.section`
width:100%;
height:100%;
padding-top:4rem;
background: url(${img__bg});
`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:1fr 1fr 1fr;
/* grid-template-rows:800px; */


@media screen and (max-width:1100px){
grid-template-columns:1fr 1fr;
/* margin-top:5rem;
grid-row-gap:3rem; */
}
@media screen and (max-width:768px){
grid-template-columns:1fr;
/* margin-top:5rem;
grid-row-gap:3rem; */
}
`
const Heading = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
text-align:center;


h3{
    color:white;
    width:80%;
    
}
`
const DisplaySection = styled.div`
transition: 0.3s;
align-items:center;
text-align:center;
margin: 0 0.5rem;

/* padding:0rem 0.3rem; */
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
    width:100%;
 
    height:15rem;
}
&:hover{
    transform :translateY(-1rem);
    cursor:pointer;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
     box-shadow: 5px 5px 15px 5px #000000;
}

@media screen and (max-width:1100px){
img {
    min-width:26rem;
}
/* margin-top:5rem;
grid-row-gap:3rem; */
}
`

const InfoContainer = () => {
    const [blogs, setBlogs] = useState(BlogData);

    return <Section>
        <Heading>
            <h3>
                Създаваме разнообразие от публикации, като нашата хитова поредица „История на пурите“, където се гмуркаме във вълнуващото минало на марките пури.
            </h3>
        </Heading>
        <Container>
            {blogs.map((blog) => {
                const { id, imgUrl, heading, paragraphOne } = blog;

                return <DisplaySection key={id}>
                    <Link to={`/blog/${id}`}>
                        <img src={imgUrl} alt={heading} />
                        <div>
                            <h1>{heading}</h1>
                            <p>{paragraphOne.length > 210 ? paragraphOne.substr(0, 210) + '...' : paragraphOne}</p>
                        </div>
                    </Link>
                </DisplaySection>

            })}
        </Container>
    </Section>
}

export default InfoContainer
