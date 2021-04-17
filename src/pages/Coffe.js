import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import Banner from '../components/Globals/SectionHero/Banner'
import coffeImg from '../images/coffe-1.jpg';

const Coffe = () => {
    return <>
        <SectionHero img={coffeImg} >
            <Banner
                greeting="Отркий"
                title='Нашето кафе'
                text="Espresso 57 се слави с неповторимо съчетание от вкусове и аромати, което ще развълнува дори най-опитния почитател на кафето. Отварянето на всяка опаковка разкрива един свят, подвластен на вкуса. Любимо предварително смляно кафе, което впечатлява с всяка глътка."

            />
        </SectionHero>

    </>

}

export default Coffe
