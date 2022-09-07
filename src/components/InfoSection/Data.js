export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'zámočníctvo a kovovýroba',
    headline: 'JURMAT s.r.o',
    description: 
        'Kovové brány, zábradlia, ploty, Brány s lamelovou výplňov a ťahovkou, kovové konštrukcie, schodiská, prístrešky, nerezové zábradlia, zákazková výroba ',
    buttonLabel: 'Čomu sa venujeme',
    buttonDirection: 'vyroba',
    imgStart: false,
    img: require('../../images/logo_big.png').default,
    alt: 'About',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'gallery',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Tu sa bude nachádzat galeria doterajšej práce',
    headline: 'Galéria',
    description: 
        'Podrobny popis toho co sa tu ma nachadzat bla bla bla bla .....',
    buttonLabel: 'Cenník',
    buttonDirection: 'prices',
    imgStart: true,
    img: require('../../images/skuska.png').default,
    alt: 'Profile',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'prices',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Cenník',
    headline: 'Približné ceny',
    description: 
        'Ceny sa líšia individualne od každej zakázky, preto nás neváhajte kontaktovať. Istotne sa dohodneme.',
    buttonLabel: 'Kontakt',
    buttonDirection: 'home',
    imgStart: false,
    img: require('../../images/cennik.jpg').default,
    alt: 'Cenník',
    dark: true,
    primary: true,
    darkText: false,
};
