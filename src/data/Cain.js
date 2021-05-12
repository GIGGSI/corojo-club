
import CM from '../images/Cain/Maduro/CM.png'
import CainBg from '../images/cain.png'

import CH from '../images/Cain/Hubano/CH.png'
import CT from '../images/Cain/Torpedo/CT.png'


import NubMaduro from '../images/Nub/Maduro/NubMaduro.png';
import NubMaduroBg from '../images/Nub/Maduro/NubMaduroBg.jpg'


// Cain Maduro
import Maduro1 from '../images/Cain/Maduro/Maduro-1.png'
import Maduro1Open from '../images/Cain/Maduro/Maduro-1Open.jpg'
import Maduro1Closed from '../images/Cain/Maduro/Maduro-1Closed.jpg'

import Maduro2 from '../images/Cain/Maduro/Maduro-2.png'
import Maduro2Open from '../images/Cain/Maduro/Maduro-2Open.jpg'
import Maduro2Closed from '../images/Cain/Maduro/Maduro-2Closed.jpg'

import Maduro3 from '../images/Cain/Maduro/Maduro-3.png'
import Maduro3Open from '../images/Cain/Maduro/Maduro3-Open.jpg'

import Maduro4 from '../images/Cain/Maduro/Maduro-4.png'
import Maduro4Open from '../images/Cain/Maduro/Maduro-4Open.jpg'
import Maduro4Closed from '../images/Cain/Maduro/Maduro-4Closed.jpg'


//Cain Hubano

import Hubano1 from '../images/Cain/Hubano/Hubano-1.png'
import Hubano1Open from '../images/Cain/Hubano/Hubano-1Open.jpg'
import Hubano1Closed from '../images/Cain/Hubano/Hubano-1Closed.jpg'

import Hubano2 from '../images/Cain/Hubano/Hubano-2.png'
import Hubano2Open from '../images/Cain/Hubano/Hubano-2Open.jpg'
import Hubano2Closed from '../images/Cain/Hubano/Hubano-2Closed.jpg'

import Hubano3 from '../images/Cain/Hubano/Hubano-3.png'
import Hubano3Open from '../images/Cain/Hubano/Hubano-3Open.jpg'

import Hubano4 from '../images/Cain/Hubano/Hubano-4.png'
import Hubano4Open from '../images/Cain/Hubano/Hubano-4Open.jpg'
import Hubano4Closed from '../images/Cain/Hubano/Hubano-4Closed.jpg'

//Torpedo
import Torpedo1 from '../images/Cain/Torpedo/Torpedo-1.png'
import Torpedo1Open from '../images/Cain/Torpedo/Torpedo-1Open.jpg'
import Torpedo1Closed from '../images/Cain/Torpedo/Torpedo-1Closed.jpg'

import Torpedo2 from '../images/Cain/Torpedo/Torpedo-2.png'
import Torpedo2Open from '../images/Cain/Torpedo/Torpedo-2Open.jpg'
import Torpedo2Closed from '../images/Cain/Torpedo/Torpedo-2Closed.jpg'


import Torpedo3 from '../images/Cain/Torpedo/Torpedo-3.png'
import Torpedo3Open from '../images/Cain/Torpedo/Torpedo-3Open.jpg'
import Torpedo3Closed from '../images/Cain/Torpedo/Torpedo-3Closed.jpg'


export const CainData = [
    {
        id: 1,
        title: 'Cain Maduro',
        subTitle: 'Cain Maduro от Olivia е пълноценно, изпълнено със събития и сложно отклонение от линията пури Cain Habano и Habano F. Точно от бухалката, тъмната, мазна обвивка Habano Maduro осигурява пълна гама от дълбоки аромати.',
        paragraphOne: `От вътрешната страна ще намерите щедра смес от никарагуански лигерос за неочаквано гладко изживяване при пушене, богато на нотки на какао, кожа и шоколад.`,
        imagBg: CainBg,
        imgUrl: CM,

        cigars: [
            {
                id: 1,
                title: '660 Maduro',
                subtitle: '6 x 60',
                img: Maduro1,
                openBox: Maduro1Open,
                closedBox: Maduro1Closed,
            },
            {
                id: 2,
                title: '550 Maduro',
                subtitle: '7.75 x 50',
                img: Maduro2,
                openBox: Maduro2Open,
                closedBox: Maduro2Closed,
            },
            {
                id: 3,
                title: '550 Maduro Turbo',
                subtitle: '5.75 x 50',
                img: Maduro3,
                openBox: Maduro3Open,
                closedBox: Maduro2Closed,
            },
            {
                id: 4,
                title: 'Cain Maduro 550 Tube',
                subtitle: '5 3/4',
                img: Maduro4,
                openBox: Maduro4Open,
                closedBox: Maduro4Closed,
            },
        ]
    },
    {
        id: 2,
        title: 'Cain Hubano',
        subTitle: 'Cain Habano от Olivia е дебела и кожена, пълна с плът и ароматизирана пура Habano.',
        paragraphOne: `Под сърдечната обвивка на Habano вашето небце ще бъде представено на сложна комбинация от дълголистни лигероси от трите основни региона на отглеждане на тютюн в Никарагуа: Esteli, Condega и Jalapa. Тази уникална комбинация отстъпва на нотките на дърво и кожа, компенсирани от сладко, почти флорално покритие.`,

        imgUrl: CH,
        imagBg: CainBg,
        cigars: [
            {
                id: 1,
                title: '550 Hubano',
                subtitle: '5x75 x 50',
                img: Hubano1,
                openBox: Hubano1Open,
                closedBox: Hubano1Closed,
            },
            {
                id: 2,
                title: '660 Habano',
                subtitle: '6 x 60',
                img: Hubano2,
                openBox: Hubano2Open,
                closedBox: Hubano2Closed,
            },
            {
                id: 3,
                title: 'Cain Habano 550 Tube',
                subtitle: '5 3/4',
                img: Hubano3,
                openBox: Hubano3Open,
                closedBox: Hubano2Closed,
            },
            {
                id: 4,
                title: 'Cain Nub Habano 464 Torpedo',
                subtitle: '4',
                img: Hubano4,
                openBox: Hubano4Open,
                closedBox: Hubano4Closed,
            },

        ]

    },
    {
        id: 3,
        title: 'Cain Torpedo',
        subTitle: 'пурите Oliva Cain 654T Maduro Maduro са разработени от Сам Леча, който също създава изключително популярните пури Nub. Те са ръчно изработени в Никарагуа от Oliva, използвайки „права лигаро“ смес от триферментирали дълги пълнители, плюс щипка Seco и Viso за запалимост.',
        paragraphOne: 'Предлагат се два варианта на обвивка: Habano има орехова основа, подчертана от мока и пипер, докато сладостта, напоена от какао на Maduro, се възползва от нотките на кожа и подправки. Богатите и пълноценни пури Oliva Cain 654T Maduro се наслаждават най-добре след разкошно хранене!',
        imgUrl: CT,
        imagBg: CainBg,
        cigars: [
            {
                id: 1,
                title: 'Oliva Cain 654 Torpedo',
                subtitle: '6 x 54',
                img: Torpedo1,
                openBox: Torpedo1Open,
                closedBox: Torpedo1Closed
            },
            {
                id: 2,
                title: 'Oliva Cain 654 Torpedo',
                subtitle: '6 x 54',
                img: Torpedo2,
                openBox: Torpedo2Open,
                closedBox: Torpedo2Closed,
            },
            {
                id: 3,
                title: 'Oliva Cain 654 Habano Torpedo',
                subtitle: '6 x 54',
                img: Torpedo3,
                openBox: Torpedo3Open,
                closedBox: Torpedo3Closed,
            },
            {
                id: 4,
                title: 'Oliva Cain 654 Habano Torpedo',
                subtitle: '6 x 54',
                img: Torpedo3,
                openBox: Torpedo3Open,
                closedBox: Torpedo3Closed,
            },
           

        ]
    },
   
    
]