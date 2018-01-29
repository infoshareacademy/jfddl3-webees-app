import React from 'react'
import {Link} from 'react-router-dom';
import WebeesPaper from './WebeesPaper'
import {GridList, GridTile} from 'material-ui/GridList';
import {database} from "../firebase";


class ListView extends React.Component {
    state = {
        cols: 2,
        runs: []
    }

    componentWillMount() {
        const width = window.innerWidth

        if (width < 1000) {
            this.setState({
                cols: 2
            })
        } else {
            this.setState({
                cols: 4
            })
        }

        var dbRef = database.ref('/runs')
        dbRef.on('value', snapshot => {
            const runFromDataBase = Object.entries(snapshot.val())
                .map(([key, val]) => {
                    val.key = key
                    return val
                })
            this.setState({runs: runFromDataBase})
        })
    }

    componentWillUnmount() {
        var dbRef = database.ref('/runs')
        dbRef.off('value')
    }

    polishSignsConversion = letter => {
        switch (letter) {
            case "ą":
                return "a"
            case "ć":
                return "c"
            case "ę":
                return "e"
            case "ł":
                return "l"
            case "ń":
                return "n"
            case "ó":
                return "o"
            case "ś":
                return "s"
            case "ź":
                return "z"
            case "ż":
                return "z"
            default:
                return letter
        }
    }

    lowercaseEnglishSigns = name => (name.toLowerCase().split('').map(this.polishSignsConversion).join(''))

    render() {
        // console.log(this.state.runs)
        console.log(this.props.searchParams.distance)
        return (
            <div>
                <WebeesPaper>
                    <div style={styles.root}>
                        <GridList
                            cellHeight={180}
                            style={styles.gridList}
                            cols={this.state.cols}
                        >
                            {this.state.runs
                            &&
                            this.state.runs
                                .filter(run => this.props.searchParams.category === '' ?
                                    true
                                    :
                                    run.category === this.props.searchParams.category
                                )
                                .filter(run => run.distance < this.props.searchParams.distance)
                                .filter(run => this.lowercaseEnglishSigns(run.name).indexOf(
                                    this.lowercaseEnglishSigns(this.props.searchParams.name)
                                ) !== -1)
                                .map((run) => (
                                    <Link
                                        key={run.key}
                                        to={'/run/' + run.key}
                                    >
                                        <GridTile
                                            title={run.name + ' - ' + Math.round(run.distance * 1000) / 1000 + ' km'}
                                        >
                                            <img src={`${process.env.PUBLIC_URL}/img/run-google-map.jpg`}/>
                                        </GridTile>
                                    </Link>
                                ))}
                        </GridList>
                    </div>
                </WebeesPaper>
            </div>
        )
    }

}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 450,
        overflowY: 'auto',
    }
};

export default ListView

