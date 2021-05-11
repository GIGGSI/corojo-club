
import caffe from '../images/Nub/Caffe/caffe.png'
import caffeBg from '../images/Nub/Caffe/CaffeBg.jpg'

import NubCon from '../images/Nub/Connecticut/NubCon.png'
import NubConBG from '../images/Nub/Connecticut/nub_connecticutBG.jpg'


import hubano from '../images/Nub/Hubano/hubano.png'
import hubanoBg from '../images/Nub/Hubano/HubaboBg.jpg'

import NubMaduro from '../images/Nub/Maduro/NubMaduro.png';
import NubMaduroBg from '../images/Nub/Maduro/NubMaduroBg.jpg'


// Caffe
import caffeCapuccino from '../images/Nub/Caffe/caffeCapuccino.png'
import caffeCapuccinoOpen from '../images/Nub/Caffe/caffeCapucitoOpen.jpg'
import caffeCapuccinoClosed from '../images/Nub/Caffe/caffeCapucitoClosed.jpg'



//Connecticut
import ConNub from '../images/Nub/Connecticut/ConNub.png'
import nubCon1 from '../images/Nub/Connecticut/nubCon1.png'
import nubCon2 from '../images/Nub/Connecticut/nubCon2.png'

//Hubano

import NH from '../images/Nub/Hubano/NH.png'
import nHubanoOpen from '../images/Nub/Hubano/nHubanoOpen.jpg'
import nHubanoClosed from '../images/Nub/Hubano/nHubano.jpg'

// Maduro
import MaduroNub from '../images/Nub/Maduro/MaduroNub.png'
import nubMaduroOpen from '../images/Nub/Maduro/nubMaduroOpen.png'
import nubMaduroClosed from '../images/Nub/Maduro/NubMaduroClosed.jpg'

export const NubData = [
    {
        id: 1,
        title: 'Caffe',
        subTitle: 'Любителите на кафе и любителите на пурите се събират тук! Ако сте истински любител на кафето, ще бъдете развълнувани от Nub Café на Olivia Cigar Company. Те излязоха отвъд традиционните си смеси, за да представят своята линия Nub Cigar от висококачествени ароматизирани димчета, предлагащи най-доброто кафе изживяване.',
        paragraphOne: `Всеки сорт се предлага в три големи размера, както и пури, всеки навит плътно, така че те са пълни до ръба с толкова висококачествени тютюни, колкото пурите два пъти по-големи от тях. Тези ароматни пури правят перфектна закуска или десертна пура ... така че ... как ви харесва вашето кафе - капучино - макиато - еспресо?`,
        imgUrl: caffe,
        imagBg: caffeBg,

        cigars: [
            {
                id: 1,
                title: 'Nub Cafe Espresso 438 ',
                subtitle: '4 x 38',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },
            {
                id: 2,
                title: 'Nub Cafe Macchiato 438',
                subtitle: '4 x 38',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },
            {
                id: 3,
                title: 'Cafe Cappucino 438',
                subtitle: '4 x 38',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },
            {
                id: 4,
                title: 'Cafe Cappuccino 542',
                subtitle: '4 x 38',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },
            {
                id: 5,
                title: 'Case Espresso 354',
                subtitle: '4 x 38',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },
            {
                id: 6,
                title: 'Cafe Cappucino 354',
                subtitle: '4x 40',
                img: caffeCapuccino,
                openBox: caffeCapuccinoOpen,
                closedBox: caffeCapuccinoClosed,
            },


        ]
    },
    {
        id: 2,
        title: 'NUB Connecticut Cigars',
        subTitle: 'От дебюта на марката през 2007 г., Nub е фаворит сред десетките любители на пури. Късите, дебели форми на пурите Nub бяха създадени, за да доставят максимално количество и вкус и аромат веднага след като изстреляте едната. Nub Кънектикът е съставен от пищна рецепта на никарагуанско свързващо вещество и пълнител под тютюн под копринено русо листа на обвивката на Еквадор Кънектикът Всички пури Nub са ръчно изработени в престижната фабрика Oliva в Естели, Никарагуа. Изберете любимата си нарязана форма в Nub Кънектикът, когато желаете хладно изгарящ профил от бадеми, кашу и бял пипер.',

        imgUrl: NubCon,
        imagBg: NubConBG,
        cigars: [
            {
                id: 1,
                title: 'Oliva Nub 354 Connecticut Single Cigar',
                subtitle: '7 x 52',
                img: ConNub,
                openBox: nubCon1,
                closedBox: nubCon2,
            },
            {
                id: 2,
                title: 'Oliva Nub 460 Connecticut Single Cigar',
                subtitle: '7 x 38',
                img: ConNub,
                openBox: nubCon1,
                closedBox: nubCon2,
            },
            {
                id: 3,
                title: 'Oliva Nub 460 Connecticut Cigars',
                subtitle: '6 x 60',
                img: ConNub,
                openBox: nubCon1,
                closedBox: nubCon2,
            },
            {
                id: 4,
                title: 'Oliva Nub 460 Connecticut Cigars',
                subtitle: '6 x 60',
                img: ConNub,
                openBox: nubCon1,
                closedBox: nubCon2,
            },
            {
                id: 5,
                title: 'Oliva Nub 464 Connecticut Cigars',
                subtitle: '6 x 56',
                img: ConNub,
                openBox: nubCon1,
                closedBox: nubCon2,
            }
        ]

    },
    {
        id: 3,
        title: 'Nub Hubano',
        subTitle: 'Пурите NUB Habano са привлекателна смес от първокласен тютюн. Произведена от Oliva Cigar Co., тази пура достига до кормилото и доставя с вкус, изгаряне и аромат. Това никарагуанско пуро разполага с мазна обвивка Habano. Опаковката е безупречна и издава нотки на кедър и подправки. Изработени на ръка, пурите NUB Habano доставят час плюс дим, благодарение на плътно опакованите първокласни дълги пълнители. Заслужава всяка стотинка, а след това и малко, тази пура със сигурност ще се хареса и ще бъде добре дошло допълнение към вашия арсенал от пури.',

        imgUrl: hubano,
        imagBg: hubanoBg,
        cigars: [
            {
                id: 1,
                title: 'Oliva Nub 358 Habano Single Cigar',
                subtitle: '7 x 50',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed
            },
            {
                id: 2,
                title: 'Oliva Nub 460 Habano Single Cigar',
                subtitle: '6 x 60',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed,
            },
            {
                id: 3,
                title: 'Oliva Nub 464 Habano Single Cigar',
                subtitle: '6.5 x 52',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed,
            },
            {
                id: 4,
                title: 'Oliva Nub 460 Habano Single Cigar',
                subtitle: '7 x 50',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed,
            },
            {
                id: 5,
                title: 'Oliva Nub 358 Habano Cigars',
                subtitle: '6 x 60',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed,
            },
            {
                id: 6,
                title: 'Oliva Nub 466 Habano Cigars',
                subtitle: '6.5 x 52',
                img: NH,
                openBox: nHubanoOpen,
                closedBox: nHubanoClosed,
            },

        ]
    },
    {
        id: 4,
        title: 'Nub Maduro',
        subTitle: 'Пурите NUB Maduro са първокласна пура, пълна с вкус. Те са изработени от Oliva Cigar Co. Те излъчват фина изработка и всички качества, които бихте очаквали от марка като Oliva. Смесена смес от никарагуански дълги пълнители седи под мазна бразилска обвивка Maduro. Гладки и кремообразни, пурите NUB Maduro се предлагат с шоколад, кафе, женско биле и подправки. С време на изгаряне близо час, тази красота няма да ви даде нищо друго освен блаженство от пушене от началото до края.',
        imgUrl: NubMaduro,
        imagBg: NubMaduroBg,
        cigars: [
            {
                id: 1,
                title: 'Oliva Nub 460 Maduro Single Cigar',
                subtitle: '7 x 50',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            },
            {
                id: 2,
                title: 'Oliva Nub 464 Maduro Single Cigar',
                subtitle: '6.5 x 60',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            },
            {
                id: 3,
                title: 'Oliva Nub 460 Tubo Maduro Single Cigar',
                subtitle: '6.5 x 52',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            },
            {
                id: 4,
                title: 'Oliva Nub 464 Maduro Cigars',
                subtitle: '8 x 52',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            },
            {
                id: 5,
                title: 'Oliva Nub 460 Maduro Cigars',
                subtitle: '7 x 50',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            },
            {
                id: 6,
                title: 'Oliva Nub 460 Tubo Maduro Cigars',
                subtitle: '6 x 50',
                img: MaduroNub,
                openBox: nubMaduroOpen,
                closedBox: nubMaduroClosed,
            }
        ]
    },
]