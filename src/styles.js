export const webeesColors = {
    red: '#BF352F',
    beige: '#FFD99B',
    green: '#88A34F',
    darkGreen: '#224732',
    dark: '#132326'
}

const webeesFont = "'Quicksand', sans-serif"

export default {
    webeesFont: {
        fontFamily: webeesFont,
        color: webeesColors.dark
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    appBar: {
        backgroundColor: webeesColors.dark
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
        fontSize: '1.15em',
        textDecoration: 'none',
        margin: '1em 0'
    },
    addRunContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10px',
        fontFamily: webeesFont,
        fontSize: '1.5em',
        color: webeesColors.dark
    },
    mapContainer: {
    },
    markerDescriptionContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
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
    },
    webeesPaper: {
        padding: 20,
        margin: 20,
        textAlign: 'center'
    }
}
