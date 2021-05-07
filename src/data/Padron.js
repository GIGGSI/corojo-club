import PadronClassic from '../images/padron-clasik.jpg'
import padron1864 from '../images/padron/PadronSeries.png'
import Padron50thAnn from '../images/padron/Padron50thAnn.png'
import Damaso from '../images/padron/Damaso.png'
import Padron_1964Ann from '../images/padron/Padron_1964AnnSeries_Hm.png';
import Padron1926 from '../images/padron/Padron1926.png'
import PadronFR_No45 from '../images/padron/PadronFR_No45.png'
import PadronSeries_Hdr from '../images/padron/PadronSeries_Hdr.jpg'
import padron3 from '../images/padron/1964-3.png'
import Padron_Damaso from '../images/padron/Padron_Damaso.jpg'
import Padron_1964 from '../images/padron/Padron_1964.jpg'
import Padron_1926 from '../images/padron/Padron_1926.jpg'
import Padron_FamReserev from '../images/padron/Padron_FamReserev.jpg'
import Padron_50Anniversary from '../images/padron/Padron_50Anniversary.jpg'
import Padron_Magnum2 from '../images/padron/Series/Padron_Magnum2.jpg'
import Padron_Executive from '../images/padron/Series/Padron_Executive.jpg'
import Churchill from '../images/padron/Series/Churchill.jpg'
import Ambassador from '../images/padron/Series/Ambassador.jpg'
import Panetela from '../images/padron/Series/Panetela.jpg'
import P4000 from '../images/padron/Series/4000.jpg'
import Palmas from '../images/padron/Series/Palmas.jpg'
import P7000 from '../images/padron/Series/P7000.jpg'
import P6000 from '../images/padron/Series/P6000.jpg'
import P5000 from '../images/padron/Series/P5000.jpg'
import P3000 from '../images/padron/Series/P3000.jpg'
import Londres from '../images/padron/Series/Londres.jpg'
import P2000 from '../images/padron/Series/P2000.jpg'
import Delicias from '../images/padron/Series/Delicias.jpg'
import Corticos from '../images/padron/Series/Cortico.jpg'
import PadronMagnumClosed from '../images/padron/Series/Padron_MagnumClosed.jpg'
import PadronMagnumOpen from '../images/padron/Series/Padron_MagnumOpen.jpg'


import Padron from '../pages/Cigars/Padron';

export const PadronData = [
    {
        id: 1,
        title: 'Padrón Series',
        subTitle: 'Основана през 1964 г. и развиваща се през цялата ни история, серията Padrón днес се състои от петнадесет пури със средно до пълно тяло с дълго пълнене, вариращи от Cortico до големи Magnum. Красиво балансиран и пълноценен дим с изключително качество и стойност, линията Padrón отлежава минимум две години и половина. Както при всички наши изключителни предложения за пури, тази линия е ръчно изработена, използвайки само отглеждан на слънце тютюн.',
        imgUrl: padron1864,
        imagBg: PadronSeries_Hdr,
     
        cigars: [
            {
                title: 'Magnum',
                subtitle: '50 x 9',
                img: Padron_Magnum2,
                openBox: PadronMagnumOpen,
                closedBox: PadronMagnumClosed,
            },
            {
                title: 'Executive',
                subtitle: '50 x 7 1/2',
                img: Padron_Executive
            },
            {
                title: 'Churchill',
                subtitle: '46 x 6 7/8',
                img: Churchill
            },
            {
                title: 'Ambassador',
                subtitle: '42 x 6 7/8',
                img: Ambassador
            },
            {
                title: 'Panetela',
                subtitle: '36 x 6 7/8',
                img: Panetela
            },
            {
                title: '4000',
                subtitle: '54 x 6 1/2',
                img: P4000
            },
            {
                title: 'Palmas',
                subtitle: '54 x 6 1/2',
                img: Palmas
            },
            {
                title: '7000',
                subtitle: '60 x 6 1/4',
                img: P7000
            },
            {
                title: '6000',
                subtitle: '52 x 5 1/2',
                img: P6000
            },
            {
                title: '5000',
                subtitle: '56 x 5 1/2',
                img: P5000
            },
            {
                title: '3000',
                subtitle: '52 x 5 1/2',
                img: P3000
            },
            {
                title: 'Londres',
                subtitle: '42 x 5 1/2',
                img: Londres
            },
            {
                title: '2000',
                subtitle: '50 x 5',
                img: P2000
            },
            {
                title: 'Delicias',
                subtitle: '42 x 5 1/2',
                img: Delicias
            },
            {
                title: 'Corticos',
                subtitle: '42 x 5 1/2',
                img: Corticos
            }
        ]
    },
    {
        id: 2,
        title: 'Damaso',
        subTitle: 'Дамасо Падрон ни даде живот, семейство и нашето начало в тази индустрия. Той беше първият Падрон, пристигнал в Куба в края на 1800 г. от Канарските острови - в негова чест предлагаме тази пура. Тази кръгла, мека, ароматна, ръчно изработена и ограничена производствена пура се произвежда с еквадорска обвивка от Кънектикът и се предлага в шест размера. За тези, които предпочитат по-здрав вкусов профил, ние предлагаме „Red Label“ Dámaso No. 34 и No. 32.',
        paragraphOne: `
        За да създадем нещо ново, ние погледнахме към миналото си. Линията пури Dámaso предлага сложен мек до среден вкусов профил, изработен в продължение на пет поколения.
        `,
        imgUrl: Damaso,
        imagBg: Padron_Damaso

    },
    {
        id: 3,
        title: 'Padrón 1964 Anniversary Series',
        subTitle: 'Линията Padrón 1964 Anniversary Series е представена през 1994 г., за да отбележи 30-годишнината на нашата компания. Тази линия се състои от шестнадесет размера, всички налични в отгледани от слънце естествени и мадурови опаковки.',
        paragraphOne: `
        Всички тютюни, използвани в тази ограничена производствена серия, отлежават четири години, създавайки гладък и сложен вкус. В чест на вековната кубинска традиция на пури за пресоване на кутии, линията от 1964 г. е въведена като серия с пресовани кутии. За защита на нашите клиенти въведохме мерки за предпазване от фалшифициране със специално проектирана двойна лента с индивидуално номериран гаранционен етикет.
        `,
        paragraphTwo: `
        Серията Padrón 1964 Anniversary последователно се класира от индустриалните експерти като една от най-добрите марки в света.
        `,
        imgUrl: Padron_1964Ann,
        imagBg: Padron_1964,
    },
    {
        id: 4,
        title: 'Padrón 1926 Serie',
        subTitle: 'Наградената с награди серия Padrón 1926 премиерира през 2002 г. в чест на 75-ия рожден ден на José O. Padrón, с десет налични размера. Продължавайки нашата традиция, тази серия се предлага в пресован формат. Тези пури са ръчно изработени от тютюн на възраст пет години, след което се смесват, за да създадат изключително гладък, сложен, балансиран и плътен вкус. За защита на всяка пура се прилага двойна лента с индивидуално номериран гаранционен етикет, за да се предпази от фалшифициране. Предлага се както в естествени, така и в мадуро опаковки.',
        imgUrl: Padron1926,
        imagBg: Padron_1926
    },
    {
        id: 5,
        title: 'Padrón Family Reserve',
        subTitle: 'Веднъж изключителна за Padrón’s, тази изключителна, индивидуално ръчно изработена поредица означава специални дати за семейни годишнини. Предлагайки пет високо оценени селекции, No. 44, 45, 46, 85 и 50 са красиво опаковани в десет броя кутии.',
        paragraphOne: `
        Предлага се както в естествена, така и в мадуро обвивка, тютюнът отлежава десет години, след което се смесва, за да създаде изключително гладък, сложен, балансиран и плътен вкус. За ваша защита на всяка пура се прилага двойна лента с индивидуално номериран гаранционен етикет, за да се предпази от фалшифициране.
        `,
        imgUrl: PadronFR_No45,
        imagBg: Padron_FamReserev
    },
    {
        id: 6,
        title: 'Padron 50th Ann',
        subTitle: 'Това ограничено производство и регистриран хумидор, издаден през 2014 г., отбелязва честването на нашата 50-годишнина с предложение от 1000 сандъка, всеки съдържащ 50 последователно номерирани пури.',
        paragraphOne: `
        Първоначалната версия предлагаше червени последователни серийни номера на пури, съответстващи на всеки номер на хумидор. Последващите издания са достъпни само като регистрирано зареждане с хумидор, имат черен цвят и не са последователни.
        `,
        paragraphTwo: `
        Уникалната смес е с плътно тяло, сложна, но балансирана, създадена изключително за честване на нашата 50-годишнина. Отлежала минимум десет години, пурата 50th Anniversary се предлага в отгледана от слънце естествена или мадуро обвивка. За наличност се свържете с местния оторизиран търговец на Padrón.            `,
        imgUrl: Padron50thAnn,
        imagBg: Padron_50Anniversary
    }
]