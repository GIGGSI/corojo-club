import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import Banner from '../components/Globals/SectionHero/Banner'

import beerBG from '../images/beerBG.jpg';
import JuliaHero from '../components/Julia/JuliaHero';
import JuliasStory from '../components/Julia/JuliasStory';
import ImageSection from '../components/ImageSection/ImageSection';
import JuliaImageSection from '../components/ImageSection/JuliasImageSection';
import WhereJulia from '../components/Julia/WhereJulia';


const Beer = () => {
    return <>
        <SectionHero img={beerBG}>
            <Banner
                greeting="Julia"
                title='има нещо за вас!'
                text='Julia е идеална у дома, в ресторанти и барове, организирани партита, светски събирания, на плажа ...
                Студено поднесено в елегантната й чаша Julia.
                Насладете се на своята Julia най-добре с прекрасна компания.
                Щракнете по-долу, за да откриете забавни ястия, с които да съчетаете вашата Julia'
            />
        </SectionHero>
        <JuliaHero />
        <JuliasStory />
        <JuliaImageSection />
        <WhereJulia />

    </>
}

export default Beer
