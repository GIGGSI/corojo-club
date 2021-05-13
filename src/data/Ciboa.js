
import CainBg from '../images/cain.png'

import EC from '../images/Ciboa/EC/EC.png'
import ecBg from '../images/Ciboa/EC/ecBg.jpg'

import CH from '../images/Cain/Hubano/CH.png'
import CT from '../images/Cain/Torpedo/CT.png'

import Maduro from '../images/Ciboa/Maduro/Maduro.png'


// Especial Connecticut

import ec1 from '../images/Ciboa/EC/ec1.png'
import ec1Open from '../images/Ciboa/EC/ec1Open.jpg'
import ec1Closed from '../images/Ciboa/EC/ec1Closed.jpg'

import ec2Open from '../images/Ciboa/EC/ec2Open.jpg'
import ec2Closed from '../images/Ciboa/EC/ec2Closed.jpg'



//Cain Maduro
import Maduro1 from '../images/Ciboa/Maduro/Maduro1.png'
import Maduro1Open from '../images/Ciboa/Maduro/Maduro1Open.jpg'
import Maduro1Closed from '../images/Ciboa/Maduro/Maduro1Closed.jpg'

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


export const CiboaData = [
    {
        id: 1,
        title: 'Cibao Seleccion Especial Connecticut',
        subTitle: 'Cibao Seleccion Especial Connecticut пури се произвеждат от известния майстор блендер Jose Blanco, използвайки най-добрите доминикански тютюни, намерени в плодородния регион Cibao на страната.',
        paragraphOne: `Предлагат се в четири популярни размера, пурите имат доминиканско свързващо вещество Piloto Cubano и реколта пълнители Criollo 98 ’, сгушени в класическа обвивка със златисто-кафява сянка на Кънектикът. Тези експертно изработени първокласни пури възнаграждават пушача с вкусни вкусове на какао, сметана, подправки и печени ядки.`,
        paragraphTwo: `
        Благодарение на изключителните умения за смесване на Jose Blanco, вие ще се насладите на невероятно гладка и добре изискана пура със средно тяло, която предлага перфектния баланс между вкус и сила. Тези превъзходни пури се сдвояват чудесно с любимата ви гастрономична кафе напитка или златен крафт ейл.
        `,
        imagBg: ecBg,
        imgUrl: EC,

        cigars: [
            {
                id: 1,
                title: 'Robusto ',
                subtitle: '5 × 50',
                img: ec1,
                openBox: ec1Open,
                closedBox: ec1Closed,
            },
            {
                id: 2,
                title: 'Gordo ',
                subtitle: '6 × 60',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed,
            },
            {
                id: 3,
                title: 'Corona Gorda ',
                subtitle: '5.88 × 46 ',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed,
            },
            {
                id: 4,
                title: 'Toro',
                subtitle: ' 6 × 52',
                img: ec1,
                openBox: ec1Open,
                closedBox: ec1Closed,
            },
        ]
    },
    {
        id: 2,
        title: 'Cibao Seleccion Especial Maduro',
        subTitle: 'Cibao Seleccion Especial Maduro пури се произвеждат от известния експерт по тютюн Хосе Бланко, като се използват само най-добрите реколта доминикански тютюни, открити в плодородния регион Cibao на страната.',
        paragraphOne: `Свързващо вещество Criollo 98 ’и пълнителни тютюни, които се състоят от редки листа Pilotico Cubano и Criollo 98’, са покрити със зашеметяваща, тъмна и мазна доминиканска обвивка. Предлагат се в четири популярни размера, тези майсторски изработени витоли възнаграждават пушача с богати, ароматизирани нотки на шоколад, бял пипер, еспресо, кедър и сладко покритие, подобно на мед.`,
        paragraphTwo: `Изключителните умения за смесване на Хосе Бланко наистина блестят с тези прекрасни пури, опаковани в мадуро.`,

        imgUrl: Maduro,
        imagBg: ecBg,
        cigars: [
            {
                id: 1,
                title: 'Robusto ',
                subtitle: '5 × 50',
                img: Maduro1,
                openBox: Maduro1Open,
                closedBox: Maduro1Closed,
            },
            {
                id: 2,
                title: 'Toro',
                subtitle: ' 6 × 52',
                img: Maduro1,
                openBox: Maduro1Open,
                closedBox: Maduro1Closed,
            },
            {
                id: 3,
                title: 'Corona Gorda ',
                subtitle: '5.88 × 46',
                img: Maduro1,
                openBox: Maduro1Open,
                closedBox: Maduro1Closed,
            },
            {
                id: 4,
                title: 'Gordo ',
                subtitle: '6 × 60',
                img: Maduro1,
                openBox: Maduro1Open,
                closedBox: Maduro1Closed,
            },

        ]

    },
    {
        id: 3,
        title: 'Cibao Seleccion Especial',
        subTitle: 'Cibao Seleccion Especial пури от майстор блендер Jose Blanco включва най-добрите реколта доминикански тютюни, отглеждани в плодородната долина Cibao.',
        paragraphOne: `Покрит от зашеметяваща еквадорска обвивка Habano, заобикаляща свързващо вещество доминиканско Criollo 98 и дълги пълнители Pilotico Cubano и Criollo '98, този пълноценен шедьовър се просмуква със сладки нотки на масло, мед и еспресо, изпъстрени с дълготраен, кремообразен завършек`,
        paragraphTwo: `
        Предлагат се в четири популярни размера, тези ръчно изработени красавици са задължителни за всеки опитен пушач, който се стреми да добави уникален и вълнуващ дим към своята първокласна колекция от пури.
        `,
        imgUrl: EC,
        imagBg: ecBg,
        cigars: [
            {
                id: 1,
                title: 'Gordo 6 × 60',
                subtitle: '6 x 54',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed
            },
            {
                id: 2,
                title: 'OliRobusto ',
                subtitle: '5 × 50',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed,
            },
            {
                id: 3,
                title: 'Corona Gorda ',
                subtitle: '5.88 × 46',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed,
            },
            {
                id: 4,
                title: 'Toro ',
                subtitle: '6 × 52',
                img: ec1,
                openBox: ec2Open,
                closedBox: ec2Closed,
            },


        ]
    },


]