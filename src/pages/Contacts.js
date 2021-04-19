import React from 'react'
import SectionHero from '../components/Globals/SectionHero/SectionHero'
import contacts from '../images/contacts.jpg';
import Banner from '../components/Globals/SectionHero/Banner'
import ContactsContainer from '../components/Contacts/ContactsContainer';


const Contacts = () => {
    return <>
        <SectionHero img={contacts} >
            <Banner geretin=""
                title="Свържете се с консултант от Corojo Club"
                text="Въпроси за продукти,
                включване във ваше събитие,
                консултация при избор на подарък,
                бизнес сътрудничество"
            />
        </SectionHero>
        <ContactsContainer />
    </>
}

export default Contacts
