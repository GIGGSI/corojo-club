import React from 'react'
import Hero from '../components/Hero';

import OurStory from '../components/OurStory/OurStory';
import InfoSection from '../components/Info/InfoSection';

//data 
import { ourStoryData } from '../data/ourStoryData';
import { SliderData } from '../data/SliderData';
import { infoSection } from '../data/InfoSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import ImageSection from '../components/ImageSection/ImageSection';
import RecommenddBlogs from '../components/RecommendedBlogs/RecommenddBlogs';

const HomePage = () => {
    return <>
        <Hero slides={SliderData} />
        <OurStory {...ourStoryData} />
        <InfoSection infoSection={infoSection} />
        <BrandsSection />
        <ImageSection />
        <RecommenddBlogs />

    </>
}

export default HomePage
