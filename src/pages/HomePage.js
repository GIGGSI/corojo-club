import React from 'react'
import Hero from '../components/Hero';
import img from '../images/bg_2.jpg'

import OurStory from '../components/OurStory/OurStory';
import InfoSection from '../components/Info/InfoSection';
import ImageSection from '../components/ImageSection/ImageSection';

//data 
import { ourStoryData } from '../data/ourStoryData';
import { SliderData } from '../data/SliderData';
import { infoSection } from '../data/InfoSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import RecommenddBlogs from '../components/RecommendedBlogs/RecommenddBlogs';

const HomePage = () => {
    return <>
        <Hero slides={SliderData} />
        <OurStory {...ourStoryData} />
        <InfoSection infoSection={infoSection} />
        <BrandsSection />
        <ImageSection title="Животът е като пура, дълга колкото живота, за да се изпуши добре..." img={img} />
        <RecommenddBlogs />

    </>
}

export default HomePage
