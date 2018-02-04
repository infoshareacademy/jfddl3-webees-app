export const webeesColors = {
    red: '#BF352F',
    beige: '#FFD99B',
    green: '#88A34F',
    darkGreen: '#224732',
    dark: '#132326'
}

export const webeesFont = "'Quicksand', sans-serif"

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
    loginBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: webeesFont,
        color: webeesColors.dark,
        width: '50vw',
        height: '40vh',
        margin: '40px',
        minWidth: '400px',
        minHeight: '400px'
    },
    centerItalic: {
        textAlign: 'center',
        fontStyle: 'italic'
    },
    appBar: {
        backgroundColor: webeesColors.dark
    },
    appBarTitle: {
        color: webeesColors.beige,
        fontFamily: webeesFont,
        fontSize: '1.75em'
    },
    sideBar: {
        backgroundColor: webeesColors.dark,
        fontFamily: webeesFont,
        fontSize: '1.1em'
    },
    input: {
        display: 'block',
        marginBottom: '5px',
        fontFamily: webeesFont,
        color: webeesColors.dark
    },
    link: {
        color: webeesColors.beige,
        fontFamily: webeesFont,
        fontSize: '1.15em',
        textDecoration: 'none',
        margin: '1em 0'
    },
    mapBox: {
        border: '1px solid' + webeesColors.dark,
        width: '50vw',
        height: '50vh'
    },
    addRunContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontFamily: webeesFont,
        fontSize: '1.5em',
        color: webeesColors.dark,
        padding: '40px',
        width: '80vw',
        margin: '50px auto 0 auto'
    },
    dashboard: {
        fontFamily: webeesFont,
        color: webeesColors.dark,
        padding: '40px',
        width: '80vw',
        margin: '50px auto 0 auto'
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
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 540,
        overflowY: 'auto',
    },
    share: {
        margin: 12,
        position: "fixed",
        bottom: 0,
        right: 0
    }
}
