import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BlogData } from '../data/BlogData'
import styled from 'styled-components/macro';
import img__bg from '../images/bg_4.jpg'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import Banner from '../components/Globals/SectionHero/Banner'
import { setColor } from '../stlyes';
import { Link } from 'react-router-dom'



const SingleBlogPage = () => {
    const { id } = useParams();
    const [singleBlog, setSingleBlog] = useState();
    const [recomemdedBlogs, setRecomendedBlogs] = useState();

    // const data = BlogData.find((blog) => blog.id === +id)

    const fetchData = (id) => {
        const data = BlogData.find((blog) => blog.id === +id);
        setSingleBlog(data)
    }

    const recomendend = BlogData.filter((item) => item.recomended);

    useEffect(() => {
        fetchData(id)
    }, [id]);

    if (!singleBlog) {
        return <h1>Loading...</h1>
    }
    const { imgUrl, heading, paragraphOne, paragraphTwo, titleTwo, paragraphThree, imgTho, paragraphFour, paragraphFive, paragraphSix } = singleBlog

    return <>
        <SectionHero img={imgUrl}>
            <Banner
                title={heading}
            />
        </SectionHero>
        <Section>
            <Container>
                <SingleBlogSection>
                    <h1>{heading}</h1>
                    <div>
                        <p>{paragraphOne}</p>
                    </div>
                    <p>{paragraphTwo}</p>
                    <img src={imgTho} alt={heading} />
                    <h3>{titleTwo}</h3>
                    <p>{paragraphThree}</p>
                    <p>{paragraphFour}</p>
                    <p>{paragraphFive}</p>
                    <p>{paragraphSix}</p>
                </SingleBlogSection>
                <Windgets>
                    <h4>Recomended blogs</h4>
                    {recomendend.map((item) => {
                        const { imgUrl, heading, paragraphOne, path, id } = item
                        return <DisplayBlog key={id}>
                            <Link to={path}>
                                <img src={imgUrl} alt={heading} />
                                <p>{paragraphOne.length > 100 ? paragraphOne.substr(0, 100) + '...' : paragraphOne}</p>
                            </Link>
                        </DisplayBlog>
                    })}
                </Windgets>
            </Container>
        </Section>
    </>
}


const Section = styled.section`
width:100%;
height:100%;
/* padding-top:4rem; */
background-image: url(${img__bg});
`
const Container = styled.div`
padding: 3rem calc((100vw - 1300px)/2);
display: grid;
grid-template-columns:2fr 1fr;

@media screen and (max-width:768px){
grid-template-columns:1fr;
}
`
const SingleBlogSection = styled.div`

padding:1rem 2rem;
/* display:grid; */

order:${({ reverse }) => (reverse ? '2' : '1')};

justify-content:center;
h1{
    text-align: center;
    color:${setColor.mainWhite}
}
h3 {
    color:${setColor.mainWhite};
    padding:2rem 0;
    text-align:center;
}
p{
    color:${setColor.mainWhite};
    padding-bottom:1rem;
}
img{
    width:100%;

}

@media screen and (max-width:768px){
    grid-template-columns:1fr;
    
}

`
const Windgets = styled.div`
display:flex;
flex-direction:column;

align-items:flex-start;
text-align:center;
line-height:1.4;
z-index: 2;
padding: 1rem 2rem;
order:${({ reverse }) => (reverse ? '2' : '1')};
color:${setColor.mainWhite};

h4{
    text-align:center;
}
`

const DisplayBlog = styled.div`

padding-top:2rem;
a {
    text-decoration:none;
    color:${setColor.mainWhite};
    
}
img{
    width:70%;
    height:8rem;
}
`

export default SingleBlogPage
