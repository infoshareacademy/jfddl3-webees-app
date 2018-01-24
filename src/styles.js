const webeesColors = {
    red: '#BF352F',
    beige: '#FFD99B',
    green: '#88A34F',
    darkGreen: '#224732',
    dark: '#132326'
}

const webeesFont = "'Quicksand', sans-serif"

export default {
    appBar: {
        backgroundColor: webeesColors.dark,
    },
    appBarTitle: {
        color: webeesColors.beige,
        fontFamily: webeesFont,
        fontSize: '1.75em'
    },
    appBarIcon: {
        color: webeesColors.beige
    },
    sideBar: {
        backgroundColor: webeesColors.dark,
        fontFamily: webeesFont,
        fontSize: '1.1em'
    },
    link: {
        color: webeesColors.beige,
        fontFamily: webeesFont,
        fontSize: '1em',
        textDecoration: 'none'
    },
    paper: {
        color: webeesColors.dark,
        fontFamily: webeesFont,
        fontSize: '1em'
    },
    textField: {
        color: webeesColors.dark,
        fontFamily: webeesFont,
        fontSize: '1em'
    }
}
