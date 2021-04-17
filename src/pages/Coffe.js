import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import Banner from '../components/Globals/SectionHero/Banner'
import coffeImg from '../images/coffe-1.jpg'
import { CoffeSectionData } from '../data/CoffeSectionData'
import InfoSection from '../components/Info/InfoSection'
import CoffeInfo from '../components/Coffe/CoffeInfo'
import CoffeSection from '../components/ImageSection/CoffeSection'


const Coffe = () => {

    console.log(CoffeSectionData)
    return <>
        <SectionHero img={coffeImg} >
            <Banner
                greeting="Отркий"
                title='Нашето кафе'
                text="Espresso 57 се слави с неповторимо съчетание от вкусове и аромати, което ще развълнува дори най-опитния почитател на кафето. Отварянето на всяка опаковка разкрива един свят, подвластен на вкуса. Любимо предварително смляно кафе, което впечатлява с всяка глътка."
            />
        </SectionHero>
        <InfoSection infoSection={CoffeSectionData} />
        <CoffeInfo />
        <CoffeSection />
    </>

}

export default Coffe
