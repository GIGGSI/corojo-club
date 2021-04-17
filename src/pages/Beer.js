import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import Banner from '../components/Globals/SectionHero/Banner'

import beerBG from '../images/beerBG.jpg';

const Beer = () => {
    return <>
        <SectionHero img={beerBG}>
            <Banner
                greeting="Юлия"
                title='Има нещо за вас!'
                text='Джулия е идеална у дома, в ресторанти и барове, организирани партита, светски събирания, на плажа ...
                Студено поднесено в елегантната й чаша Джулия.
                Насладете се на своята Джулия най-добре с прекрасна компания.
                Щракнете по-долу, за да откриете забавни ястия, с които да съчетаете вашата Джулия'
            />
        </SectionHero>

    </>
}

export default Beer
