import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import events from '../images/events.jpg';
import Banner from '../components/Globals/SectionHero/Banner'
import InfoContainer from '../components/Blog/InfoContainer';

const Events = () => {
    return <>
        <SectionHero img={events}>
            <Banner
                greeting="Добре дошли в блога за пури на "
                title="Corojo Club"
                text='Тук ще намерите най-новите новини за пури и нашите ивенти. Всеки път, когато се пусне нов продукт или някое голямо име обяви, ние сме на него! '
            />
        </SectionHero>
        <InfoContainer />

    </>
}

export default Events
